import test from "node:test";
import assert from "node:assert/strict";
import {
  achievements,
  categories,
  impacts,
  filterAchievements,
  radarPosition,
} from "../src/data.js";

test("all 20 source entries are present exactly once with provenance and valid categories", () => {
  assert.deepEqual(
    achievements.map((a) => a.id),
    Array.from({ length: 20 }, (_, i) => i + 1),
  );
  for (const a of achievements) {
    assert.ok(
      a.title &&
        a.description &&
        a.metric &&
        a.unit &&
        a.page &&
        a.details.length,
    );
    assert.ok(a.categories.includes(a.primary));
    assert.ok(a.categories.every((c) => categories.some((x) => x.id === c)));
    assert.ok(a.impacts.every((i) => impacts.some((x) => x.id === i)));
  }
});
test("combined filtering uses intersection, keeps cross-listed records, and supports empty results", () => {
  assert.equal(filterAchievements().length, 20);
  assert.deepEqual(
    filterAchievements("tech", "reach").map((a) => a.id),
    [1, 2, 10, 13],
  );
  assert.deepEqual(
    filterAchievements("research", "research").map((a) => a.id),
    [5, 6, 9],
  );
  assert.deepEqual(filterAchievements("skills", "funding"), []);
  assert.ok(filterAchievements("awards").some((a) => a.id === 3));
});
test("source distinctions survive presentation data", () => {
  const find = (id) => achievements.find((a) => a.id === id);
  assert.equal(find(6).unit, "treatment-response prediction accuracy");
  assert.ok(find(6).stats.some((s) => s[1] === "pre-publication"));
  assert.equal(find(10).stats[0][1], "estimated time saved");
  assert.equal(find(7).unit, "judge-assessed pre-seed valuation");
  assert.match(find(2).details.join(" "), /\$2,000/);
});
test("radar positions remain inside the display and source IDs have distinct locations", () => {
  const positions = achievements.map(radarPosition);
  for (const p of positions) assert.ok(Math.hypot(p.x - 0.5, p.y - 0.5) < 0.43);
  assert.equal(new Set(positions.map((p) => `${p.x},${p.y}`)).size, 20);
});
