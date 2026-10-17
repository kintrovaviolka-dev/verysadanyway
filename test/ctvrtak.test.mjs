import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { cardiacOutput, receptorResponse, visualFieldDefect, visualSites, windowGray, validateProgress } from "../ctvrtak/models.mjs";
import { skinCases } from "../ctvrtak/skin-cases.mjs";

const subjects = ["farmakologie", "derma", "kardio", "radiolka", "psych", "neuro"];
const courses = await Promise.all(subjects.map(async subject => (await import(`../ctvrtak/courses/${subject}.mjs`)).default));

test("every fourth-year portal has a substantial, wired course with valid source references", async () => {
  const hub = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.equal((hub.match(/class="subject-card[^"]*"[^>]*data-grade="4"/g) || []).length, subjects.length);
  assert.equal((hub.match(/class="year-v2-badge"/g) || []).length, subjects.length);
  for (const [index, course] of courses.entries()) {
    const subject = subjects[index];
    const html = await readFile(new URL(`../${subject}/index.html`, import.meta.url), "utf8");
    assert.ok(html.includes(`data-subject="${subject}"`));
    assert.ok(html.includes('src="../ctvrtak/portal.mjs"'));
    assert.ok(html.includes('href="../ctvrtak/portal.css"'));
    assert.ok(html.includes(`id="${course.legacy.slice(1)}"`), `${subject}: legacy navigation must resolve`);
    assert.equal(course.lessons.length, 6);
    assert.equal(new Set(course.lessons.map(lesson => lesson.id)).size, 6);
    const sourceIds = course.sources.map(source => source.id);
    assert.equal(new Set(sourceIds).size, sourceIds.length);
    for (const source of course.sources) {
      assert.equal(new URL(source.url).protocol, "https:");
      assert.ok(source.label.length > 10);
    }
    const words = course.lessons.flatMap(lesson => [
      lesson.intro, ...lesson.explanation, ...lesson.steps, ...lesson.compare.flat(), lesson.pitfall, lesson.question, lesson.answer
    ]).join(" ").split(/\s+/).length;
    assert.ok(words >= 850, `${subject} must contain substantial original explanations, got ${words} words`);
    assert.doesNotMatch(JSON.stringify(course), /[\u0400-\u04ff]/, "No accidental Cyrillic lookalikes in Czech prose");
    for (const lesson of course.lessons) {
      assert.match(lesson.id, /^[a-z0-9-]+$/);
      assert.ok(lesson.minutes >= 4 && lesson.minutes <= 10);
      assert.equal(lesson.explanation.length, 2);
      assert.ok(lesson.explanation.every(text => text.length > 180));
      assert.equal(lesson.steps.length, 3);
      assert.equal(lesson.compare.length, 2);
      assert.ok(lesson.pitfall.length > 50);
      assert.ok(lesson.question.length > 25 && lesson.question.includes("?"), `${subject}/${lesson.id}: recall question`);
      assert.ok(lesson.answer.length > 100);
      assert.ok(lesson.sourceIds.length > 0);
      assert.ok(lesson.sourceIds.every(id => sourceIds.includes(id)), `${subject}/${lesson.id}: source must exist`);
    }
  }
});

test("five subjects each have a different new lab, psychiatry remains content-focused", () => {
  const labs = courses.filter(course => course.lab).map(course => course.lab);
  assert.equal(labs.length, 5);
  assert.equal(new Set(labs).size, 5);
  assert.equal(courses[subjects.indexOf("psych")].lab, undefined);
});

test("receptor model distinguishes potency from efficacy and is monotone", () => {
  assert.equal(receptorResponse(10).effect, 50);
  assert.equal(receptorResponse(0).effect, 0);
  assert.deepEqual(receptorResponse(20, "competitive", 1), { effect: 50, ec50: 20, emax: 100 });
  assert.deepEqual(receptorResponse(10, "noncompetitive", 1), { effect: 25, ec50: 10, emax: 50 });
  assert.deepEqual(receptorResponse(10, "partial"), { effect: 20, ec50: 10, emax: 40 });
  for (const mode of ["full", "competitive", "noncompetitive", "partial"]) {
    let previous = 0;
    for (const concentration of [0, 0.1, 1, 10, 100, 1000, 10000]) {
      const result = receptorResponse(concentration, mode, 5);
      assert.ok(result.effect >= previous && result.effect <= result.emax);
      previous = result.effect;
    }
  }
  for (const args of [[NaN], [-1], [Infinity], [10, "unknown"], [10, "competitive", -1]]) {
    assert.throws(() => receptorResponse(...args), RangeError);
  }
});

test("cardiac output preserves units, equal EF can conceal a twofold output difference", () => {
  const normal = cardiacOutput(140, 56, 70);
  const small = cardiacOutput(70, 28, 70);
  assert.deepEqual(normal, { strokeVolume: 84, ef: 60, output: 5.88 });
  assert.deepEqual(small, { strokeVolume: 42, ef: 60, output: 2.94 });
  assert.equal(cardiacOutput(200, 140, 80).ef, 30);
  assert.equal(cardiacOutput(220, 10, 160).output, 33.6);
  for (const values of [[60, 60, 70], [60, 100, 70], [NaN, 50, 70], [100, 50, 0]]) {
    assert.throws(() => cardiacOutput(...values), RangeError);
  }
});

test("CT window maps midpoint and endpoints, clips outside and changes contrast", () => {
  assert.equal(windowGray(0, 40, 80), 0);
  assert.equal(windowGray(40, 40, 80), 128);
  assert.equal(windowGray(80, 40, 80), 255);
  assert.equal(windowGray(-1000, 40, 80), 0);
  assert.equal(windowGray(1000, 40, 80), 255);
  assert.equal(windowGray(35, -1000, 1), windowGray(65, -1000, 1));
  assert.ok(windowGray(65, 40, 80) - windowGray(35, 40, 80) > windowGray(65, 500, 2000) - windowGray(35, 500, 2000));
  for (const args of [[0, 0, 0], [0, 0, -1], [NaN, 0, 80], [0, Infinity, 80]]) {
    assert.throws(() => windowGray(...args), RangeError);
  }
});

test("visual fields use patient's viewpoint and correct crossed pathway anatomy", () => {
  assert.deepEqual(visualFieldDefect("nerve", "left").left, [true, true, true, true]);
  assert.deepEqual(visualFieldDefect("nerve", "left").right, [false, false, false, false]);
  assert.deepEqual(visualFieldDefect("nerve", "right").left, [false, false, false, false]);
  assert.deepEqual(visualFieldDefect("nerve", "right").right, [true, true, true, true]);
  assert.deepEqual(visualFieldDefect("chiasm", "left"), visualFieldDefect("chiasm", "right"));
  assert.deepEqual(visualFieldDefect("chiasm", "left").left, [true, false, true, false]);
  assert.deepEqual(visualFieldDefect("chiasm", "left").right, [false, true, false, true]);
  for (const [site, side, expected] of [
    ["tract", "left", [false, true, false, true]], ["tract", "right", [true, false, true, false]],
    ["temporal", "left", [false, true, false, false]], ["temporal", "right", [true, false, false, false]],
    ["parietal", "left", [false, false, false, true]], ["parietal", "right", [false, false, true, false]]
  ]) {
    const result = visualFieldDefect(site, side);
    assert.deepEqual(result.left, expected);
    assert.deepEqual(result.right, expected);
  }
  assert.equal(visualSites.length, 5);
  assert.throws(() => visualFieldDefect("cortex", "left"), RangeError);
  assert.throws(() => visualFieldDefect("tract", "other"), RangeError);
});

test("each progressive dermatology case explains every option", () => {
  assert.equal(skinCases.length, 3);
  for (const item of skinCases) {
    assert.equal(item.steps.length, 3);
    assert.ok(courses[1].sources.some(source => source.id === item.sourceId));
    for (const step of item.steps) {
      assert.equal(step.options.length, 3);
      assert.equal(step.reasons.length, step.options.length);
      assert.ok(Number.isInteger(step.correct) && step.correct >= 0 && step.correct < step.options.length);
      assert.ok(step.reasons.every(reason => reason.length > 60));
    }
  }
});

test("stored progress is validated, subject-scoped and copied", () => {
  const ids = courses[0].lessons.map(lesson => lesson.id);
  const value = { version: 1, lastLesson: ids[1], ratings: { [ids[0]]: "understood", [ids[1]]: "review" } };
  assert.deepEqual(validateProgress(value, ids), value);
  assert.notEqual(validateProgress(value, ids).ratings, value.ratings);
  for (const malformed of [null, [], {}, { ...value, version: 2 }, { ...value, lastLesson: "unknown" }, { ...value, ratings: [] }, { ...value, ratings: { unknown: "review" } }, { ...value, ratings: { [ids[0]]: "passed" } }]) {
    assert.throws(() => validateProgress(malformed, ids));
  }
});
