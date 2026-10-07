// drill/storage.js - Správa lokální IndexedDB databáze pro MedDrill
class MedDrillStorage {
  constructor() {
    this.dbName = 'MedDrillDB';
    this.dbVersion = 1;
    this.db = null;
  }

  async init() {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onupgradeneeded = event => {
        const db = event.target.result;

        // 1. Stažené předměty
        if (!db.objectStoreNames.contains('subjects')) {
          db.createObjectStore('subjects', { keyPath: 'id' });
        }

        // 2. Stav jednotlivých otázek v Spaced Repetition (SRS)
        if (!db.objectStoreNames.contains('user_state')) {
          const stateStore = db.createObjectStore('user_state', { keyPath: 'questionId' });
          stateStore.createIndex('subjectId', 'subjectId', { unique: false });
          stateStore.createIndex('box', 'box', { unique: false });
          stateStore.createIndex('nextReviewDate', 'nextReviewDate', { unique: false });
          stateStore.createIndex('isStarred', 'isStarred', { unique: false });
        }

        // 3. Vlastní uživatelské balíčky
        if (!db.objectStoreNames.contains('custom_decks')) {
          db.createObjectStore('custom_decks', { keyPath: 'id' });
        }

        // 4. Historie procvičování a statistiky
        if (!db.objectStoreNames.contains('history')) {
          const histStore = db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
          histStore.createIndex('date', 'date', { unique: false });
        }

        // 5. Globální nastavení
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
      };

      request.onsuccess = event => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = event => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  // --- SPRÁVA PŘEDMĚTŮ (SUBJECTS) ---

  async saveSubject(subjectData) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('subjects', 'readwrite');
      const store = tx.objectStore('subjects');
      subjectData.downloadedAt = Date.now();
      const req = store.put(subjectData);
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }

  async getSubject(id) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('subjects', 'readonly');
      const store = tx.objectStore('subjects');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = e => reject(e.target.error);
    });
  }

  async getAllDownloadedSubjects() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('subjects', 'readonly');
      const store = tx.objectStore('subjects');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = e => reject(e.target.error);
    });
  }

  async deleteSubject(id) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('subjects', 'readwrite');
      const store = tx.objectStore('subjects');
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }

  async isSubjectDownloaded(id) {
    const sub = await this.getSubject(id);
    return !!sub;
  }

  // --- SPACED REPETITION & QUESTION STATE ---

  async getQuestionState(questionId) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('user_state', 'readonly');
      const store = tx.objectStore('user_state');
      const req = store.get(questionId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = e => reject(e.target.error);
    });
  }

  async getAllQuestionStates() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('user_state', 'readonly');
      const store = tx.objectStore('user_state');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = e => reject(e.target.error);
    });
  }

  async saveQuestionState(state) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('user_state', 'readwrite');
      const store = tx.objectStore('user_state');
      const req = store.put(state);
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }

  // Zaznamená odpověď do SRS Leitnerova systému
  // isCorrect: boolean (true/false)
  async recordAnswer(question, isCorrect) {
    await this.init();
    const existing = (await this.getQuestionState(question.id)) || {
      questionId: question.id,
      subjectId: question.subjectId,
      box: 1,
      intervalDays: 1,
      timesCorrect: 0,
      timesIncorrect: 0,
      isStarred: false
    };

    const now = Date.now();
    existing.lastReviewedDate = now;

    if (isCorrect) {
      existing.timesCorrect = (existing.timesCorrect || 0) + 1;
      existing.box = Math.min((existing.box || 1) + 1, 5);
      
      // Leitner intervaly: Box 1: 1 den, Box 2: 3 dny, Box 3: 7 dní, Box 4: 16 dní, Box 5: 35 dní
      const intervals = [1, 1, 3, 7, 16, 35];
      existing.intervalDays = intervals[existing.box] || 35;
      existing.nextReviewDate = now + existing.intervalDays * 24 * 60 * 60 * 1000;
    } else {
      existing.timesIncorrect = (existing.timesIncorrect || 0) + 1;
      existing.box = 1; // Návrat do 1. krabičky
      existing.intervalDays = 1;
      existing.nextReviewDate = now + 1 * 24 * 60 * 60 * 1000;
    }

    await this.saveQuestionState(existing);
    return existing;
  }

  async toggleStar(questionId, subjectId) {
    await this.init();
    const existing = (await this.getQuestionState(questionId)) || {
      questionId,
      subjectId,
      box: 1,
      intervalDays: 1,
      timesCorrect: 0,
      timesIncorrect: 0,
      isStarred: false
    };

    existing.isStarred = !existing.isStarred;
    await this.saveQuestionState(existing);
    return existing.isStarred;
  }

  // --- VLASTNÍ BALÍČKY (CUSTOM DECKS) ---

  async saveCustomDeck(deck) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('custom_decks', 'readwrite');
      const store = tx.objectStore('custom_decks');
      deck.updatedAt = Date.now();
      if (!deck.createdAt) deck.createdAt = deck.updatedAt;
      const req = store.put(deck);
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }

  async getCustomDecks() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('custom_decks', 'readonly');
      const store = tx.objectStore('custom_decks');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = e => reject(e.target.error);
    });
  }

  async deleteCustomDeck(id) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('custom_decks', 'readwrite');
      const store = tx.objectStore('custom_decks');
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }

  // --- HISTORIE A STREAK ---

  async logSession(session) {
    await this.init();
    session.date = session.date || Date.now();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('history', 'readwrite');
      const store = tx.objectStore('history');
      const req = store.add(session);
      req.onsuccess = () => {
        // Udržovat maximálně 500 záznamů historie pro prevenci vyčerpání kvóty
        const countReq = store.count();
        countReq.onsuccess = () => {
          if (countReq.result > 500) {
            const cursorReq = store.openCursor();
            let toDelete = countReq.result - 500;
            cursorReq.onsuccess = event => {
              const cursor = event.target.result;
              if (cursor && toDelete > 0) {
                cursor.delete();
                toDelete--;
                cursor.continue();
              }
            };
          }
        };
        resolve(req.result);
      };
      req.onerror = e => reject(e.target.error);
    });
  }

  async getHistory() {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('history', 'readonly');
      const store = tx.objectStore('history');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = e => reject(e.target.error);
    });
  }

  async getStats() {
    const history = await this.getHistory();
    const states = await this.getAllQuestionStates();

    let totalAnswered = 0;
    let totalCorrect = 0;
    history.forEach(h => {
      totalAnswered += (h.totalAnswered || 0);
      totalCorrect += (h.correctCount || 0);
    });

    const masteredCount = states.filter(s => s.box >= 4).length;
    const learningCount = states.filter(s => s.box >= 1 && s.box < 4).length;
    const mistakesCount = states.filter(s => s.timesIncorrect > s.timesCorrect).length;
    const starredCount = states.filter(s => s.isStarred).length;

    // Počítání denního streaku
    const uniqueDays = new Set(
      history.map(h => new Date(h.date).toISOString().slice(0, 10))
    );
    const sortedDays = Array.from(uniqueDays).sort().reverse();

    let streak = 0;
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    let checkDate = sortedDays.includes(today) ? today : (sortedDays.includes(yesterday) ? yesterday : null);
    if (checkDate) {
      let cur = new Date(checkDate);
      while (true) {
        const dateStr = cur.toISOString().slice(0, 10);
        if (uniqueDays.has(dateStr)) {
          streak++;
          cur = new Date(cur.getTime() - 86400000);
        } else {
          break;
        }
      }
    }

    return {
      totalAnswered,
      totalCorrect,
      accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      masteredCount,
      learningCount,
      mistakesCount,
      starredCount,
      streak
    };
  }

  // --- NASTAVENÍ (SETTINGS) ---

  async getSetting(key, defaultValue = null) {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction('settings', 'readonly');
      const store = tx.objectStore('settings');
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result ? req.result.value : defaultValue);
      req.onerror = () => resolve(defaultValue);
    });
  }

  async setSetting(key, value) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('settings', 'readwrite');
      const store = tx.objectStore('settings');
      const req = store.put({ key, value });
      req.onsuccess = () => resolve(true);
      req.onerror = e => reject(e.target.error);
    });
  }
}

// Export singleton instance pro globální použití v aplikaci
window.drillStorage = new MedDrillStorage();
