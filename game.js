// ════════════════════════════════════════════
//   METNAKER — GAME LOGIC
// ════════════════════════════════════════════
import { WORD_PAIRS, CATEGORIES } from './words.js';

const G = {
  players:  5,
  imps:     1,
  blanks:   0,
  hints:    true,
  names:    [],
  cats:     ['makla'],
  game:     null,
};

// [text-color, bg-color]
const COLORS = [
  ['#1c4a30','#ddf0e5'], ['#b83223','#fdecea'], ['#c8920a','#fdf3d8'],
  ['#1a3a7a','#dde8ff'], ['#6a1a6a','#f0ddff'], ['#2a6a4a','#d8f4e8'],
  ['#7a3a10','#fde8d8'], ['#1a4a60','#d8f0fa'], ['#503010','#f8e8c8'],
  ['#3a1a5a','#eeddff'], ['#1a5a4a','#d8f8f0'], ['#5a2a10','#fceadc'],
];

let revIdx = 0, flipped = false;

// ── NAVIGATION ───────────────────────────
window.goTo = (id) => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  if (id === 's-game')    buildGame();
  if (id === 's-results') buildResults();
};

// ── INIT ─────────────────────────────────
function init() {
  buildCats();
  buildNames();
  validate();
  syncToggle();
}

window.step = (k, d) => {
  const lim = { players:[3,12], imposters:[1,4], blanks:[0,2] };
  G[k === 'imposters' ? 'imps' : k] = Math.max(lim[k][0], Math.min(lim[k][1], (G[k === 'imposters' ? 'imps' : k] || 0) + d));
  document.getElementById(`${k}-val`).textContent = G[k === 'imposters' ? 'imps' : k];
  if (k === 'players') buildNames();
  validate();
};

window.toggleHints = () => {
  G.hints = !G.hints;
  syncToggle();
};

function syncToggle() {
  const t = document.getElementById('hint-toggle');
  const s = document.getElementById('hint-sub');
  t.classList.toggle('on', G.hints);
  s.textContent = G.hints ? 'Activé — indice flou visible' : 'Désactivé — l\'imposteur est dans le noir';
}

function buildCats() {
  const el = document.getElementById('cats');
  el.innerHTML = '';
  Object.entries(CATEGORIES).forEach(([k, label]) => {
    if (k === 'custom' && !WORD_PAIRS.some(w => w.category === 'custom')) return;
    const b = document.createElement('button');
    b.className = 'cat' + (G.cats.includes(k) ? ' on' : '');
    b.textContent = label;
    b.onclick = () => {
      if (G.cats.includes(k)) {
        if (G.cats.length === 1) return;
        G.cats = G.cats.filter(c => c !== k);
        b.classList.remove('on');
      } else {
        G.cats.push(k); b.classList.add('on');
      }
    };
    el.appendChild(b);
  });
}

function buildNames() {
  const n = G.players;
  while (G.names.length < n) G.names.push('');
  G.names = G.names.slice(0, n);
  const el = document.getElementById('names-list');
  el.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const [fg, bg] = COLORS[i % COLORS.length];
    const row = document.createElement('div');
    row.className = 'name-row';
    row.innerHTML = `
      <div class="name-num" style="background:${bg};color:${fg}">${i+1}</div>
      <input class="name-input" type="text" maxlength="16"
        placeholder="Joueur ${i+1}" value="${G.names[i]}"
        oninput="G.names[${i}]=this.value"/>`;
    el.appendChild(row);
  }
}

function validate() {
  const ok = (G.imps + G.blanks) < G.players;
  document.getElementById('err-msg').style.display = ok ? 'none' : 'block';
  const b = document.getElementById('deal-btn');
  b.disabled = !ok;
}

// ── START ────────────────────────────────
window.startGame = () => {
  const pool = WORD_PAIRS.filter(w => G.cats.includes(w.category));
  if (!pool.length) { alert('Aucun mot dans les catégories choisies'); return; }
  const pair = pool[Math.floor(Math.random() * pool.length)];

  const roles = [
    ...Array(G.imps).fill('i'),
    ...Array(G.blanks).fill('b'),
    ...Array(G.players - G.imps - G.blanks).fill('c'),
  ];
  shuffle(roles);

  G.game = {
    players: roles.map((role, i) => ({
      name:  pname(i),
      role,
      word:  role === 'c' ? pair.citizen : null,
      hint:  pair.hint || null,
      color: COLORS[i % COLORS.length],
      out:   false,
      init:  pname(i).charAt(0).toUpperCase() || (i+1)+'',
    })),
    word:  pair.citizen,
    hint:  pair.hint || null,
  };

  revIdx = 0; flipped = false;
  showReveal(0);
  goTo('s-reveal');
};

const pname = i => (G.names[i] || '').trim() || `Joueur ${i+1}`;

// ── REVEAL ───────────────────────────────
function showReveal(idx) {
  const p = G.game.players[idx];
  const total = G.game.players.length;

  document.getElementById('rev-prog').textContent = `${idx+1} / ${total}`;
  document.getElementById('rev-name').textContent = p.name;

  document.getElementById('card-inner').classList.remove('flipped');
  flipped = false;
  document.getElementById('tap-cue').style.display = 'block';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-go').style.display = 'none';
  document.getElementById('imp-reveal').style.display = 'none';

  const front = document.getElementById('card-front');
  const hasHint = G.hints && p.role === 'i' && p.hint;
  const hintHTML = hasHint
    ? `<div class="hint-box"><span class="hint-icon">💡</span><span class="hint-text">${p.hint}</span></div>`
    : (p.role === 'i' ? `<div class="card-sub" style="margin-top:8px">Écoute bien et bluff !</div>` : '');

  if (p.role === 'c') {
    front.innerHTML = `
      <span class="card-role c">Citoyen</span>
      <div class="card-word">${p.word}</div>
      <div class="card-sub">Décris ce mot sans le trahir</div>`;
  } else if (p.role === 'i') {
    front.innerHTML = `
      <span class="card-role i">Imposteur 🕵️</span>
      <div class="card-word" style="color:var(--ink-3);font-size:40px;letter-spacing:4px">???</div>
      <div class="card-tag">Pas de mot — devine et bluff</div>
      ${hintHTML}`;
  } else {
    front.innerHTML = `
      <span class="card-role b">Blanc</span>
      <div class="card-word" style="color:var(--ink-3);font-size:40px;letter-spacing:4px">???</div>
      <div class="card-sub">Aucun indice — écoute et devine</div>`;
  }
}

window.flipCard = () => {
  if (flipped) return;
  flipped = true;
  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('tap-cue').style.display = 'none';

  const last = revIdx === G.game.players.length - 1;
  if (last) {
    const imps = G.game.players.filter(p => p.role === 'i');
    if (imps.length > 1) {
      document.getElementById('imp-chips').innerHTML =
        imps.map(u => `<span class="imp-chip">${u.name}</span>`).join('');
      document.getElementById('imp-reveal').style.display = 'block';
    }
    document.getElementById('btn-go').style.display = 'flex';
  } else {
    document.getElementById('btn-next').style.display = 'flex';
  }
};

window.nextReveal = () => { revIdx++; showReveal(revIdx); };

// ── GAME ─────────────────────────────────
function buildGame() {
  document.getElementById('word-banner').innerHTML = `
    <div class="wb-label">Mot secret</div>
    <div class="wb-word">${G.game.word}</div>`;
  renderGrid();
}

function renderGrid() {
  const g = document.getElementById('players-grid');
  g.innerHTML = '';
  G.game.players.forEach((p, i) => {
    const [fg, bg] = p.color;
    const d = document.createElement('div');
    d.className = 'p-card' + (p.out ? ' out' : '');
    d.onclick = () => { G.game.players[i].out = !p.out; renderGrid(); };
    d.innerHTML = `
      ${p.out ? '<div class="out-badge">✕</div>' : ''}
      <div class="p-avatar" style="background:${bg};color:${fg}">${p.init}</div>
      <div class="p-name">${p.name}</div>`;
    g.appendChild(d);
  });
}

// ── RESULTS ──────────────────────────────
function buildResults() {
  const { players, word, hint } = G.game;
  const imps   = players.filter(p => p.role === 'i');
  const allOut = imps.every(p => p.out);

  const rows = players.map(p => {
    const [fg, bg] = p.color;
    const icon = p.role === 'c' ? '✅' : p.role === 'i' ? '🕵️' : '⬜';
    const role = p.role === 'c' ? `Citoyen — ${word}`
      : p.role === 'i' ? `Imposteur — le mot était : ${word}`
      : 'Blanc — aucun mot';
    const elim = p.out ? `<span class="res-elim">éliminé</span>` : '';
    return `
      <div class="res-row">
        <div class="res-av" style="background:${bg};color:${fg}">${p.init}</div>
        <div class="res-info">
          <div class="res-name">${p.name} ${elim}</div>
          <div class="res-role">${role}</div>
        </div>
        <div class="res-icon">${icon}</div>
      </div>`;
  }).join('');

  document.getElementById('results-inner').innerHTML = `
    <div class="results-hero">
      <span class="res-emoji">${allOut ? '🏆' : '😈'}</span>
      <div class="res-title">${allOut ? 'Les citoyens gagnent !' : 'Les imposteurs gagnent !'}</div>
      <div class="res-sub">${allOut ? 'Bravo — le metnaker a été démasqué 💪' : 'El metnaker s\'en est sorti 🕵️'}</div>
    </div>
    <div class="words-reveal">
      <div class="wr-card ck">
        <div class="wr-label">Mot secret</div>
        <div class="wr-word">${word}</div>
      </div>
      <div class="wr-card ik">
        <div class="wr-label">Indice imposteur</div>
        <div class="wr-word">${hint || '—'}</div>
      </div>
    </div>
    <div class="result-rows">${rows}</div>
    <div class="spacer16"></div>`;
}

window.rematch     = () => { G.game.players.forEach(p => p.out = false); window.startGame(); };
window.confirmQuit = () => { if (confirm('Quitter cette partie ?')) goTo('s-setup'); };

function shuffle(a) {
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
}

window.G = G;
init();
