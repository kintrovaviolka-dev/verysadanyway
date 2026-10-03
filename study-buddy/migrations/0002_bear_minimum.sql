CREATE TABLE IF NOT EXISTS bear_minimum_sessions (
  study_date TEXT PRIMARY KEY,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  completed_at TEXT NOT NULL
);
