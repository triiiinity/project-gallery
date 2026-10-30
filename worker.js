// project gallery: the small server behind the guest book.
// Everything else on the site is plain files; only addresses starting with /api/ come here.
//   GET  /api/guestbook            approved notes, newest first
//   POST /api/guestbook            sign (the note waits for approval)
//   GET  /api/guestbook/pending    waiting notes      (needs the ADMIN_KEY password)
//   POST /api/guestbook/review     approve or delete  (needs the ADMIN_KEY password)

const BLOCKED = [
  "fuck", "shit", "bitch", "cunt", "asshole", "dick", "pussy", "whore", "slut", "bastard",
  "nigger", "nigga", "faggot", "fag", "retard", "kike", "spic", "chink", "tranny", "dyke",
  "porn", "viagra", "casino", "crypto", "bitcoin", "onlyfans", "http://", "https://", "www."
];

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

function blocked(text) {
  const t = (text || "").toLowerCase();
  const squashed = t.replace(/[^a-z0-9:/.]+/g, "");
  return BLOCKED.some(w => t.includes(w) || squashed.includes(w.replace(/[^a-z0-9:/.]/g, "")));
}

async function ready(env) {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, place TEXT, note TEXT NOT NULL, mark TEXT, strokes TEXT,
    created INTEGER NOT NULL, approved INTEGER NOT NULL DEFAULT 0, who TEXT)`).run();
}

async function hash(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].slice(0, 12).map(x => x.toString(16).padStart(2, "0")).join("");
}

const isAdmin = (req, env) => env.ADMIN_KEY && req.headers.get("x-admin-key") === env.ADMIN_KEY;

const clean = (s, max) => String(s || "").replace(/\s+/g, " ").trim().slice(0, max);

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(req);
    if (!env.DB) return json({ error: "the guest book database isn't connected" }, 503);
    await ready(env);

    if (url.pathname === "/api/guestbook" && req.method === "GET") {
      const { results } = await env.DB.prepare(
        "SELECT id, name, place, note, mark, strokes, created FROM notes WHERE approved = 1 ORDER BY created DESC LIMIT 300").all();
      return json(results.map(r => ({ ...r, strokes: r.strokes ? JSON.parse(r.strokes) : [] })));
    }

    if (url.pathname === "/api/guestbook" && req.method === "POST") {
      const raw = await req.text();
      if (raw.length > 120000) return json({ error: "that signature is too long" }, 413);
      let b; try { b = JSON.parse(raw); } catch (e) { return json({ error: "bad request" }, 400); }
      const name = clean(b.name, 60), place = clean(b.place, 60), note = clean(b.note, 300), mark = clean(b.mark, 20);
      if (!name || !note) return json({ error: "add your name and a note to sign" }, 400);
      if (blocked(`${name} ${place} ${note}`)) return json({ error: "please keep the guest book kind; edit your note and try again" }, 422);
      let strokes = Array.isArray(b.strokes) ? b.strokes.slice(0, 80).map(st => (Array.isArray(st) ? st.slice(0, 600) : [])
        .map(p => [Math.round(Number(p[0]) || 0), Math.round(Number(p[1]) || 0)])) : [];
      // one signature per visitor per minute
      const who = await hash((req.headers.get("cf-connecting-ip") || "") + (env.ADMIN_KEY || "pg"));
      const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM notes WHERE who = ? AND created > ?").bind(who, Date.now() - 60000).first();
      if (recent && recent.n > 0) return json({ error: "thank you! please wait a minute before signing again" }, 429);
      await env.DB.prepare("INSERT INTO notes (name, place, note, mark, strokes, created, approved, who) VALUES (?, ?, ?, ?, ?, ?, 0, ?)")
        .bind(name, place, note, mark, JSON.stringify(strokes), Date.now(), who).run();
      return json({ ok: true });
    }

    if (url.pathname === "/api/guestbook/pending" && req.method === "GET") {
      if (!isAdmin(req, env)) return json({ error: "wrong password" }, 401);
      const { results } = await env.DB.prepare(
        "SELECT id, name, place, note, mark, strokes, created FROM notes WHERE approved = 0 ORDER BY created ASC LIMIT 200").all();
      return json(results.map(r => ({ ...r, strokes: r.strokes ? JSON.parse(r.strokes) : [] })));
    }

    if (url.pathname === "/api/guestbook/review" && req.method === "POST") {
      if (!isAdmin(req, env)) return json({ error: "wrong password" }, 401);
      const b = await req.json().catch(() => ({}));
      const id = Number(b.id);
      if (!id) return json({ error: "which note?" }, 400);
      if (b.action === "approve") await env.DB.prepare("UPDATE notes SET approved = 1 WHERE id = ?").bind(id).run();
      else if (b.action === "delete") await env.DB.prepare("DELETE FROM notes WHERE id = ?").bind(id).run();
      else return json({ error: "approve or delete?" }, 400);
      return json({ ok: true });
    }

    return json({ error: "not found" }, 404);
  }
};
