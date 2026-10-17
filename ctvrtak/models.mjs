function inRange(value, min, max, name) {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new RangeError(`${name}: očekává se číslo od ${min} do ${max}.`);
  }
}

export function receptorResponse(concentration, mode = "full", antagonist = 0) {
  inRange(concentration, 0, 10000, "Koncentrace");
  inRange(antagonist, 0, 5, "Relativní antagonista");
  if (!["full", "competitive", "noncompetitive", "partial"].includes(mode)) {
    throw new RangeError("Neznámý receptorový model.");
  }
  const ec50 = mode === "competitive" ? 10 * (1 + antagonist) : 10;
  const emax = mode === "partial" ? 40 : mode === "noncompetitive" ? 100 / (1 + antagonist) : 100;
  return { ec50, emax, effect: emax * concentration / (ec50 + concentration) };
}

export function cardiacOutput(edv, esv, rate) {
  inRange(edv, 60, 220, "EDV");
  inRange(esv, 10, 210, "ESV");
  inRange(rate, 40, 160, "Frekvence");
  if (esv >= edv) throw new RangeError("ESV musí být menší než EDV. Upravte objemy; pro tuto kombinaci výsledek nezobrazujeme.");
  const strokeVolume = edv - esv;
  return { strokeVolume, ef: strokeVolume / edv * 100, output: strokeVolume * rate / 1000 };
}

export function windowGray(hu, level, width) {
  inRange(hu, -1500, 3000, "HU");
  inRange(level, -1000, 1000, "Střed okna");
  inRange(width, 1, 2500, "Šířka okna");
  return Math.round(Math.max(0, Math.min(1, (hu - (level - width / 2)) / width)) * 255);
}

export const visualSites = [
  { id: "nerve", label: "Zrakový nerv", description: "Úplná léze nervu přeruší vstup z jednoho oka ještě před chiasmatem." },
  { id: "chiasm", label: "Střed chiasmatu", description: "Postižena jsou křížící se vlákna nazálních sítnic, která přijímají temporální části zorných polí." },
  { id: "tract", label: "Optický trakt", description: "Za chiasmatem nese jedna strana informace z opačné poloviny zorného pole obou očí." },
  { id: "temporal", label: "Meyerova klička", description: "Temporální radiace nese horní kontralaterální kvadrant zorného pole." },
  { id: "parietal", label: "Parietální radiace", description: "Parietální radiace nese dolní kontralaterální kvadrant zorného pole." }
];

export function visualFieldDefect(site, side) {
  if (!visualSites.some(item => item.id === site) || !["left", "right"].includes(side)) {
    throw new RangeError("Neznámé místo nebo strana zrakové léze.");
  }
  // Quadrants are ordered upper-left, upper-right, lower-left, lower-right, as seen by the patient.
  if (site === "nerve") {
    return {
      left: Array(4).fill(side === "left"),
      right: Array(4).fill(side === "right"),
      label: `Úplný výpadek ${side === "left" ? "levého" : "pravého"} oka`
    };
  }
  if (site === "chiasm") {
    return { left: [true, false, true, false], right: [false, true, false, true], label: "Bitemporální hemianopsie" };
  }
  const affectedRight = side === "left";
  const field = [!affectedRight, affectedRight, !affectedRight, affectedRight];
  if (site === "temporal") field.splice(2, 2, false, false);
  if (site === "parietal") field.splice(0, 2, false, false);
  const direction = affectedRight ? "Pravostranná" : "Levostranná";
  return {
    left: [...field], right: [...field],
    label: `${direction} homonymní ${site === "tract" ? "hemianopsie" : site === "temporal" ? "horní kvadrantanopsie" : "dolní kvadrantanopsie"}`
  };
}

export function validateProgress(value, lessonIds) {
  if (!value || typeof value !== "object" || value.version !== 1 ||
      !lessonIds.includes(value.lastLesson) || !value.ratings || Array.isArray(value.ratings) ||
      typeof value.ratings !== "object" ||
      Object.entries(value.ratings).some(([id, rating]) => !lessonIds.includes(id) || !["review", "understood"].includes(rating))) {
    throw new Error("Uložené sebehodnocení má neplatný formát. Původní kartičky ani jejich pokrok se nemění.");
  }
  return { version: 1, lastLesson: value.lastLesson, ratings: { ...value.ratings } };
}
