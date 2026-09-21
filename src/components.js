import { categories } from "./data.js";
export const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const idLabel = (id) => String(id).padStart(2, "0");
export const categoryName = (id) =>
  categories.find((c) => c.id === id)?.name ?? "All achievements";

/** Metric readout shared by radar details and the flight-log cards. */
export function Metric(value, label, className = "") {
  return `<div class="metric ${className}"><strong>${escapeHTML(value)}</strong><span>${escapeHTML(label)}</span></div>`;
}
export function TargetPanel(a) {
  if (!a)
    return `<div class="target-top eyebrow">03 / NO CONTACTS</div><h2>No matching signals.</h2><p class="target-description">Choose another impact or clear the filters to return to all 20 achievements.</p><button class="reset-button" data-reset>Clear filters ↗</button>`;
  return `<div class="target-top eyebrow">03 / TARGET LOCKED <span>${idLabel(a.id)}</span></div>
    <div class="target-category">${escapeHTML(categoryName(a.primary))}</div><h2>${escapeHTML(a.title)}</h2><p class="role">${escapeHTML(a.role)}</p>
    ${Metric(a.metric, a.unit, "primary-readout")}
    <div class="submetrics">${a.stats.map(([value, label]) => Metric(value, label)).join("")}</div>
    <p class="target-description">${escapeHTML(a.description)}</p>
    <div class="target-actions"><a class="detail-link" href="#record-${a.id}" data-read="${a.id}">READ FLIGHT RECORD <span>↘</span></a><div class="target-nav"><button data-previous aria-label="Previous matching achievement">←</button><button data-next aria-label="Next matching achievement">→</button></div></div>`;
}
/** Native details keeps supporting evidence keyboard-accessible without modal focus traps. */
export function AchievementCard(a) {
  return `<article class="record" id="record-${a.id}" data-id="${a.id}"><div class="record-top"><span class="eyebrow">${idLabel(a.id)} / ${escapeHTML(categoryName(a.primary))}</span><button class="lock-button" data-lock="${a.id}" aria-label="Lock radar on ${escapeHTML(a.title)}">⌖</button></div>
 <h3>${escapeHTML(a.title)}</h3><p class="record-role">${escapeHTML(a.role)}</p>
 ${Metric(a.metric, a.unit, "card-readout")}<p class="record-description">${escapeHTML(a.description)}</p>
 <details><summary>Metrics & source <span>+</span></summary><div class="record-evidence"><div class="evidence-stats">${a.stats.map(([v, l]) => Metric(v, l)).join("")}</div><ul>${a.details.map((s) => `<li>${escapeHTML(s)}</li>`).join("")}</ul><p class="source">UC ACTIVITIES LIST · DRAFT 4<br>ENTRY ${idLabel(a.id)} / PDF PAGE ${escapeHTML(a.page)}</p></div></details></article>`;
}
