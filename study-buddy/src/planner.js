export const SUBJECT_RULES = [
  { match: /radiation protection/i, subject: 'radiology', label: 'Radiologie' },
  { match: /dermatology/i, subject: 'dermatology', label: 'Dermatologie' },
  { match: /neurology/i, subject: 'neurology', label: 'Neurologie' },
  { match: /surgery/i, subject: 'surgery', label: 'Chirurgie' }
];

export function classifyCourse(summary = '') {
  return SUBJECT_RULES.find((rule) => rule.match.test(summary)) ?? null;
}

export function unfoldIcs(raw) {
  return raw.replace(/\r?\n[ \t]/g, '');
}

export function unescapeIcs(value = '') {
  return value.replace(/\\n/gi, ' ').replace(/\\,/g, ',').replace(/\\;/g, ';').replace(/\\\\/g, '\\');
}

export function parseIcsDate(value = '') {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?)?/);
  if (!match) return null;
  const [, year, month, day, hour = '00', minute = '00', second = '00'] = match;
  return {
    date: `${year}-${month}-${day}`,
    time: `${hour}:${minute}:${second}`,
    local: `${year}-${month}-${day}T${hour}:${minute}:${second}`
  };
}

export function parseIcsEvents(raw) {
  const unfolded = unfoldIcs(raw);
  return unfolded.split('BEGIN:VEVENT').slice(1).map((block) => {
    const fields = {};
    for (const line of block.split(/\r?\n/)) {
      const colon = line.indexOf(':');
      if (colon < 0) continue;
      const key = line.slice(0, colon).split(';')[0];
      fields[key] = unescapeIcs(line.slice(colon + 1));
    }
    const starts = parseIcsDate(fields.DTSTART);
    const ends = parseIcsDate(fields.DTEND);
    if (!fields.UID || !starts || !ends) return null;
    const course = classifyCourse(fields.SUMMARY);
    return {
      id: fields.UID,
      startsAt: starts.local,
      endsAt: ends.local,
      studyDate: starts.date,
      summary: fields.SUMMARY ?? 'Bez názvu',
      subject: course?.subject ?? null,
      location: fields.LOCATION ?? null
    };
  }).filter(Boolean);
}

export function studyCapacity({ date, busyMinutes = 0, weekdayMinutes = 40, weekendMinutes = 90 }) {
  const weekday = new Date(`${date}T12:00:00`).getDay();
  const isWeekend = weekday === 0 || weekday === 6;
  const baseline = isWeekend ? weekendMinutes : weekdayMinutes;
  if (isWeekend) return baseline;
  if (busyMinutes >= 300) return 10;
  if (busyMinutes >= 180) return Math.max(15, baseline - 25);
  if (busyMinutes >= 90) return Math.max(20, baseline - 10);
  return baseline;
}

export function addDays(date, count) {
  const next = new Date(`${date}T12:00:00`);
  next.setDate(next.getDate() + count);
  return next.toISOString().slice(0, 10);
}

export function datesBetween(start, end) {
  const dates = [];
  for (let date = start; date <= end; date = addDays(date, 1)) dates.push(date);
  return dates;
}

export function findFirstFittingDate({ startDate, endDate, minutes, usedByDate, capacityByDate }) {
  for (const date of datesBetween(startDate, endDate)) {
    const capacity = capacityByDate.get(date) ?? 0;
    const used = usedByDate.get(date) ?? 0;
    if (capacity - used >= minutes) return date;
  }
  return null;
}
