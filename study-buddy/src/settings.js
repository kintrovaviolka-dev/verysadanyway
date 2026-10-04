const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export function validateReminderTimes(settings) {
  const entries = [
    ['ranní', settings.morning_time, settings.morning_enabled],
    ['večerní', settings.evening_time, settings.evening_enabled],
    ['noční', settings.late_time, settings.late_enabled]
  ];

  for (const [, time] of entries) {
    if (typeof time !== 'string' || !TIME_PATTERN.test(time) || Number(time.slice(3)) % 15 !== 0) {
      return { ok: false, error: 'Časy připomínek nastav prosím po čtvrthodinách (např. 07:30 nebo 20:00).' };
    }
  }

  const enabledTimes = entries.filter(([, , enabled]) => enabled).map(([, time]) => time);
  if (new Set(enabledTimes).size !== enabledTimes.length) {
    return { ok: false, error: 'Zapnuté připomínky potřebují každý svůj čas.' };
  }

  return { ok: true };
}
