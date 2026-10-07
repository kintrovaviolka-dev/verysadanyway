// Pure MedDrill rules shared by the browser app and Node tests.
(function exposeMedDrillCore(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.MedDrillCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createMedDrillCore() {
  const DAILY_LIMIT = 20;
  const SPRINT_DURATION_SECONDS = 20 * 60;
  const DAY_MS = 24 * 60 * 60 * 1000;

  function localDateKey(timestamp = Date.now()) {
    const date = new Date(timestamp);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function isNewQuestion(question, userStates) {
    return !userStates.has(question.id);
  }

  function getDailySelection(allQuestions, userStates, now = Date.now(), limit = DAILY_LIMIT) {
    const due = allQuestions
      .filter(question => {
        const state = userStates.get(question.id);
        return state && Number.isFinite(state.nextReviewDate) && state.nextReviewDate <= now;
      })
      .sort((a, b) => userStates.get(a.id).nextReviewDate - userStates.get(b.id).nextReviewDate);

    const dueSelection = due.slice(0, limit);
    const remaining = Math.max(0, limit - dueSelection.length);
    const fresh = allQuestions
      .filter(question => isNewQuestion(question, userStates))
      .sort((a, b) => a.id.localeCompare(b.id))
      .slice(0, remaining);

    return {
      questions: [...dueSelection, ...fresh],
      dueCount: due.length,
      remainingDue: Math.max(0, due.length - dueSelection.length),
      newCount: fresh.length
    };
  }

  function getSrsRatingUpdate(existingState, rating, now = Date.now()) {
    const currentBox = existingState && existingState.box ? existingState.box : 1;
    const intervals = [1, 1, 3, 7, 16, 35];
    let box;
    let isCorrect;

    if (rating === 'bad') {
      box = 1;
      isCorrect = false;
    } else if (rating === 'medium') {
      box = 2;
      isCorrect = true;
    } else {
      box = Math.min(currentBox + 1, 5);
      isCorrect = true;
    }

    const intervalDays = intervals[box] || intervals[5];
    return {
      box,
      intervalDays,
      isCorrect,
      nextReviewDate: now + intervalDays * DAY_MS
    };
  }

  function getRemainingSeconds(deadlineMs, now = Date.now()) {
    return Math.max(0, Math.ceil((deadlineMs - now) / 1000));
  }

  function isNewerRevision(available, installed) {
    if (!available || !installed) return Boolean(available && !installed);
    return String(available) !== String(installed);
  }

  return {
    DAILY_LIMIT,
    SPRINT_DURATION_SECONDS,
    localDateKey,
    getDailySelection,
    getSrsRatingUpdate,
    getRemainingSeconds,
    isNewerRevision
  };
});
