-- Cloudflare Worker cron runs every 15 minutes; 23:40 would never be reached.
UPDATE settings SET late_time = '23:45' WHERE late_time = '23:40';
