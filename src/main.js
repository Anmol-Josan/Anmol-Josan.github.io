import "@fontsource/barlow-condensed/latin-500.css";
import "@fontsource/barlow-condensed/latin-600.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./style.css";
import {
  achievements,
  categories,
  impacts,
  filterAchievements,
  radarPosition,
} from "./data.js";
import {
  AchievementCard,
  TargetPanel,
  idLabel,
  escapeHTML,
  categoryName,
} from "./components.js";
import { RadarRenderer } from "./radar.js";

const app = document.querySelector("#app");
app.innerHTML = `
<header class="masthead"><a href="#" class="brand" aria-label="Anmol Josan, back to top"><span class="brand-mark" aria-hidden="true">⌖</span> ANMOL JOSAN <span class="muted">/ FLIGHT DECK</span></a><div class="header-right"><span class="status">PORTFOLIO SYSTEM</span><button id="motion" class="quiet" aria-pressed="true">MOTION ON</button></div></header>
<main><section class="intro"><div><p class="eyebrow">ENGINEER · RESEARCHER · BUILDER</p><h1>Ideas into<br><span>measurable impact.</span></h1><p class="intro-copy">Software that saves time. Research that asks better questions.<br> Communities that reach further.</p></div><div class="intro-id"><span class="eyebrow">OPERATOR / 001</span><strong>ANMOL<br>JOSAN</strong><span class="small">20 ACTIVITIES & AWARDS<br>5 FIELDS OF EXPLORATION</span></div></section>
<section class="deck" id="explorer" aria-label="Achievement explorer"><div class="deck-top"><span><i class="live-dot" aria-hidden="true"></i> ACHIEVEMENT RADAR</span><span class="muted">SELECT A SIGNAL. EXPLORE THE IMPACT.</span><span id="track-count"></span></div><div class="cockpit"><aside class="sectors"><div class="eyebrow">01 / SELECT SECTOR</div><div id="filters" role="group" aria-label="Achievement category"></div><div class="impact-filter"><label class="eyebrow" for="impact">FILTER BY IMPACT</label><select id="impact">${impacts.map((i) => `<option value="${i.id}">${i.name}</option>`).join("")}</select></div><div class="sector-foot"><span class="eyebrow">SCAN COVERAGE</span><div class="coverage" role="meter" aria-label="Matching achievements" aria-valuemin="0" aria-valuemax="20" aria-valuenow="20"><span></span></div><span class="small" id="coverage-label"></span></div></aside><div class="radar-wrap"><div class="radar-caption"><span class="eyebrow">02 / ACQUIRE TARGET</span><span class="small" id="render-mode">RADAR</span></div><div id="radar" class="radar" role="group" aria-label="Radar contacts grouped by primary field"><canvas aria-hidden="true"></canvas><div class="radar-grid" aria-hidden="true"></div><div class="radar-compass" aria-hidden="true">${categories
  .map((c, i) => {
    const angle = (i * Math.PI * 2) / 5;
    return `<span style="left:${50 + Math.sin(angle) * 46}%;top:${50 - Math.cos(angle) * 46}%">${c.short}</span>`;
  })
  .join(
    "",
  )}</div><div id="contacts"></div><div class="radar-center" aria-hidden="true">+</div></div><div class="radar-bottom small"><span id="radar-status"></span><span>SELECT TO LOCK ↗</span></div><p class="radar-help">Sectors group primary fields. Numbers match flight-log records.</p></div><article class="target" id="target" aria-label="Selected achievement"></article></div><div class="deck-bottom"><span class="small">MULTI-FIELD RECORDS APPEAR IN EACH RELEVANT FILTER</span><button class="text-button" data-reset>RESET FILTERS ↺</button></div></section>
<div class="sr-only" role="status" id="announcer" aria-live="polite" aria-atomic="true"></div>
<section id="records" class="records" aria-label="Achievement flight log"><div class="section-heading"><div><p class="eyebrow">THE FLIGHT LOG</p><h2>Selected signals. Lasting impact.</h2></div><span class="small" id="record-count"></span></div><div class="record-grid"></div></section>
<aside class="source-note"><span class="eyebrow">SOURCE / UC ACTIVITIES LIST · DRAFT 4</span><p>All 20 records follow the supplied activities list. Metrics reflect that document, not live measurements. Open a record’s source notes for context, estimates, and publication status. Overlapping project metrics are not added together.</p></aside></main>
<footer><span>ANMOL JOSAN <span class="muted">/ FLIGHT DECK</span></span><span class="small">20 RECORDS. ONE FLIGHT LOG.</span><a href="#">BACK TO TOP ↑</a></footer>`;

const media = matchMedia("(prefers-reduced-motion: reduce)");
const state = {
  category: "all",
  impact: "all",
  selected: 1,
  motion: !media.matches && !navigator.connection?.saveData,
};
const elements = {
  filters: document.querySelector("#filters"),
  contacts: document.querySelector("#contacts"),
  target: document.querySelector("#target"),
  grid: document.querySelector(".record-grid"),
  impact: document.querySelector("#impact"),
  motion: document.querySelector("#motion"),
};
const renderer = new RadarRenderer(document.querySelector("canvas"), {
  onMode: (mode) => (document.querySelector("#render-mode").textContent = mode),
});
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (state.motion)
          entry.target.animate(
            [
              { opacity: 0.2, transform: "translateY(18px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 450, easing: "cubic-bezier(.2,.7,.3,1)" },
          );
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08 },
);
const announce = (message) =>
  (document.querySelector("#announcer").textContent = message);

function renderFilters() {
  elements.filters.innerHTML = [
    { id: "all", name: "All achievements" },
    ...categories,
  ]
    .map((c) => {
      const count = filterAchievements(c.id, state.impact).length;
      return `<button class="sector ${state.category === c.id ? "active" : ""}" data-category="${c.id}" aria-pressed="${state.category === c.id}"><span class="sector-name">${escapeHTML(c.name)}</span><span class="sector-count">${idLabel(count)}</span></button>`;
    })
    .join("");
}
function renderContacts(matches) {
  elements.contacts.innerHTML = matches
    .map((a) => {
      const p = radarPosition(a);
      return `<button class="contact ${a.id === state.selected ? "selected" : ""}" data-contact="${a.id}" style="left:${p.x * 100}%;top:${p.y * 100}%" aria-label="${idLabel(a.id)}: ${escapeHTML(a.title)}" aria-pressed="${a.id === state.selected}" title="${escapeHTML(a.title)}">${idLabel(a.id)}</button>`;
    })
    .join("");
  if (state.motion)
    for (const button of elements.contacts.children) {
      const a = achievements.find(
        (a) => a.id === Number(button.dataset.contact),
      );
      const p = radarPosition(a);
      button.animate([{ opacity: 0.25 }, { opacity: 1 }], {
        duration: 300,
        delay: (p.angle / (Math.PI * 2)) * 900,
        fill: "backwards",
      });
    }
}
function selectAchievement(id, { announceChange = true } = {}) {
  const a = filterAchievements(state.category, state.impact).find(
    (a) => a.id === id,
  );
  if (!a) return false;
  state.selected = id;
  elements.target.innerHTML = TargetPanel(a);
  renderer.select(radarPosition(a));
  for (const button of elements.contacts.children) {
    const selected = Number(button.dataset.contact) === id;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
  for (const card of elements.grid.children)
    card.classList.toggle("locked", Number(card.dataset.id) === id);
  if (state.motion)
    elements.target.animate(
      [
        { opacity: 0.45, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 260 },
    );
  if (announceChange) announce(`Selected ${a.title}. ${a.metric} ${a.unit}.`);
  return true;
}
function applyFilters(category = state.category, impact = state.impact) {
  if (category !== "all" && !categories.some((c) => c.id === category))
    throw new Error("Unknown category");
  if (!impacts.some((i) => i.id === impact)) throw new Error("Unknown impact");
  state.category = category;
  state.impact = impact;
  elements.impact.value = impact;
  const matches = filterAchievements(category, impact);
  if (!matches.some((a) => a.id === state.selected))
    state.selected = matches[0]?.id ?? null;
  revealObserver.disconnect();
  renderFilters();
  renderContacts(matches);
  elements.grid.innerHTML = matches.length
    ? matches.map(AchievementCard).join("")
    : `<div class="empty-state"><h3>No matching records.</h3><p>Try another combination of category and impact.</p><button class="reset-button" data-reset>Clear filters ↗</button></div>`;
  document.querySelector("#track-count").textContent =
    `${idLabel(matches.length)} CONTACTS`;
  document.querySelector("#coverage-label").textContent =
    `${idLabel(matches.length)} OF 20 RECORDS`;
  document
    .querySelector(".coverage")
    .setAttribute("aria-valuenow", String(matches.length));
  document.querySelector(".coverage span").style.transform =
    `scaleX(${matches.length / 20})`;
  document.querySelector("#record-count").textContent =
    `${idLabel(matches.length)} RECORDS / ${category === "all" ? "ALL SECTORS" : categories.find((c) => c.id === category).short}`;
  document.querySelector("#radar-status").textContent =
    category === "all"
      ? "ALL SECTORS"
      : categories.find((c) => c.id === category).short;
  renderer.scan(categories.findIndex((c) => c.id === category));
  if (state.selected !== null)
    selectAchievement(state.selected, { announceChange: false });
  else {
    elements.target.innerHTML = TargetPanel(null);
    renderer.select(null);
  }
  for (const card of elements.grid.children) revealObserver.observe(card);
  announce(
    `${matches.length} achievements. ${categoryName(category)}. ${impacts.find((i) => i.id === impact).name}.`,
  );
  return matches;
}
function setMotion(enabled) {
  state.motion = enabled;
  document.documentElement.dataset.motion = enabled ? "on" : "off";
  elements.motion.textContent = enabled ? "MOTION ON" : "MOTION OFF";
  elements.motion.setAttribute("aria-pressed", String(enabled));
  renderer.setMotion(enabled);
  if (!enabled)
    for (const animation of document.getAnimations()) animation.cancel();
}
const onMotionPreference = () =>
  setMotion(!media.matches && !navigator.connection?.saveData);
media.addEventListener("change", onMotionPreference);
elements.motion.addEventListener("click", () => setMotion(!state.motion));
elements.impact.addEventListener("change", () =>
  applyFilters(state.category, elements.impact.value),
);
app.addEventListener("click", (event) => {
  const button = event.target.closest("button,a");
  if (!button) return;
  if (button.dataset.category) {
    const id = button.dataset.category;
    applyFilters(id);
    elements.filters
      .querySelector(`[data-category="${id}"]`)
      .focus({ preventScroll: true });
  }
  if (button.dataset.contact) selectAchievement(Number(button.dataset.contact));
  if (button.hasAttribute("data-reset")) {
    applyFilters("all", "all");
    elements.filters.querySelector("button").focus({ preventScroll: true });
  }
  if (button.dataset.lock) {
    selectAchievement(Number(button.dataset.lock));
    document
      .querySelector("#explorer")
      .scrollIntoView({
        behavior: state.motion ? "smooth" : "instant",
        block: "start",
      });
    elements.contacts
      .querySelector(`[data-contact="${button.dataset.lock}"]`)
      ?.focus({ preventScroll: true });
  }
  if (button.dataset.read) {
    event.preventDefault();
    const card = document.querySelector(`#record-${button.dataset.read}`);
    card.querySelector("details").open = true;
    card.scrollIntoView({
      behavior: state.motion ? "smooth" : "instant",
      block: "center",
    });
    card.querySelector("summary").focus({ preventScroll: true });
  }
  if (
    button.hasAttribute("data-previous") ||
    button.hasAttribute("data-next")
  ) {
    const matches = filterAchievements(state.category, state.impact);
    const index = matches.findIndex((a) => a.id === state.selected);
    const forward = button.hasAttribute("data-next");
    selectAchievement(
      matches[(index + (forward ? 1 : -1) + matches.length) % matches.length]
        .id,
    );
    elements.target
      .querySelector(forward ? "[data-next]" : "[data-previous]")
      .focus({ preventScroll: true });
  }
});
elements.contacts.addEventListener("keydown", (event) => {
  if (
    ![
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ].includes(event.key)
  )
    return;
  event.preventDefault();
  const matches = filterAchievements(state.category, state.impact);
  const current = matches.findIndex(
    (a) => a.id === Number(event.target.dataset.contact),
  );
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? matches.length - 1
        : (current +
            (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) +
            matches.length) %
          matches.length;
  selectAchievement(matches[next].id);
  elements.contacts
    .querySelector(`[data-contact="${matches[next].id}"]`)
    .focus();
});
setMotion(state.motion);
applyFilters();

// Optional structured navigation; the same validated actions update visible UI.
const lifecycle = new AbortController();
if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(
      document.modelContext.registerTool(
        {
          name: "filter_portfolio",
          title: "Filter achievements",
          description:
            "Filter the visible portfolio by category and impact. Does not modify achievement data.",
          inputSchema: {
            type: "object",
            properties: {
              category: {
                type: "string",
                enum: ["all", ...categories.map((c) => c.id)],
              },
              impact: { type: "string", enum: impacts.map((i) => i.id) },
            },
            required: ["category", "impact"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input) {
            if (
              !input ||
              typeof input.category !== "string" ||
              typeof input.impact !== "string"
            )
              throw new Error("Category and impact are required.");
            const matches = applyFilters(input.category, input.impact);
            return {
              count: matches.length,
              records: matches.map((a) => ({
                id: a.id,
                title: a.title,
                metric: a.metric,
                unit: a.unit,
              })),
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
  } catch {
    /* Unsupported experimental implementations must not affect the portfolio. */
  }
}
function dispose() {
  renderer.dispose();
  revealObserver.disconnect();
  lifecycle.abort();
  media.removeEventListener("change", onMotionPreference);
}
window.addEventListener("pagehide", (event) => {
  if (!event.persisted) dispose();
});
if (import.meta.hot) import.meta.hot.dispose(dispose);
