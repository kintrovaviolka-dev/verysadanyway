## 2026-08-03 - Restoring Focus for Feedback Modals
**Learning:** Found that custom feedback modals omit programmatic focus management when opened or closed, leading to a broken accessibility flow for keyboard users.
**Action:** Always ensure custom modals explicitly manage focus: shift focus to the first interactive element (like the textarea) on open, restore focus to the trigger button on close, and implement Escape key dismissal to enhance accessibility.
