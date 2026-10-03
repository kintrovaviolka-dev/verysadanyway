-- Přidání přepínačů pro ranní, večerní a noční notifikace do tabulky settings
ALTER TABLE settings ADD COLUMN morning_enabled INTEGER NOT NULL DEFAULT 1;
ALTER TABLE settings ADD COLUMN evening_enabled INTEGER NOT NULL DEFAULT 1;
ALTER TABLE settings ADD COLUMN late_enabled INTEGER NOT NULL DEFAULT 1;
