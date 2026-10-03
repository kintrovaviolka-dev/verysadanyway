-- V tomto semestru je plánovaná pouze obecná dermatologie; speciálka a venerologie zůstávají v databázi pro další semestr.
UPDATE topics
SET is_active = 0
WHERE subject = 'dermatology'
  AND CAST(REPLACE(id, 'dermatology:derma-', '') AS INTEGER) >= 13;

UPDATE plan_items
SET status = 'moved'
WHERE status = 'pending'
  AND topic_id IN (
    SELECT id FROM topics
    WHERE subject = 'dermatology' AND is_active = 0
  );
