CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  timezone TEXT NOT NULL DEFAULT 'Europe/Prague',
  morning_time TEXT NOT NULL DEFAULT '07:30',
  evening_time TEXT NOT NULL DEFAULT '20:00',
  late_time TEXT NOT NULL DEFAULT '23:40',
  weekday_minutes INTEGER NOT NULL DEFAULT 40,
  weekend_minutes INTEGER NOT NULL DEFAULT 90,
  initialized_at TEXT
);

CREATE TABLE IF NOT EXISTS calendar_events (
  id TEXT PRIMARY KEY,
  starts_at TEXT NOT NULL,
  ends_at TEXT NOT NULL,
  study_date TEXT NOT NULL,
  summary TEXT NOT NULL,
  subject TEXT,
  location TEXT
);
CREATE INDEX IF NOT EXISTS calendar_events_study_date ON calendar_events(study_date);

CREATE TABLE IF NOT EXISTS course_blocks (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  label TEXT NOT NULL,
  starts_on TEXT NOT NULL,
  ends_on TEXT NOT NULL,
  UNIQUE(subject, starts_on, ends_on)
);

CREATE TABLE IF NOT EXISTS topics (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  title TEXT NOT NULL,
  source_path TEXT,
  estimated_minutes INTEGER NOT NULL DEFAULT 18,
  is_key INTEGER NOT NULL DEFAULT 0,
  is_active INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS topics_subject ON topics(subject);

CREATE TABLE IF NOT EXISTS plan_items (
  id TEXT PRIMARY KEY,
  plan_date TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('topic', 'urgent', 'cards')),
  topic_id TEXT,
  label TEXT NOT NULL,
  estimated_minutes INTEGER NOT NULL,
  pass_number INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'done', 'moved')),
  origin_date TEXT,
  created_at TEXT NOT NULL,
  completed_at TEXT
);
CREATE INDEX IF NOT EXISTS plan_items_plan_date ON plan_items(plan_date, status);
CREATE INDEX IF NOT EXISTS plan_items_topic ON plan_items(topic_id, pass_number);

CREATE TABLE IF NOT EXISTS check_ins (
  id TEXT PRIMARY KEY,
  study_date TEXT NOT NULL,
  result TEXT NOT NULL CHECK (result IN ('all', 'partial', 'none')),
  note TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS push_subscriptions (
  endpoint TEXT PRIMARY KEY,
  subscription_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS job_runs (
  id TEXT PRIMARY KEY,
  job_type TEXT NOT NULL,
  ran_at TEXT NOT NULL,
  result TEXT NOT NULL
);
