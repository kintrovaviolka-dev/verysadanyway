const { describe, it } = require('node:test');
const assert = require('node:assert');
const { checkReferer } = require('./feedback');

describe('checkReferer', () => {
  it('should return false when no referer and no origin are provided', () => {
    const req = { headers: {} };
    assert.strictEqual(checkReferer(req), false);
  });

  it('should return true when a valid localhost referer is provided', () => {
    const req = { headers: { referer: 'http://localhost:3000' } };
    assert.strictEqual(checkReferer(req), true);
  });

  it('should return true when a valid Vercel referer is provided', () => {
    const req = { headers: { referer: 'https://patfyz.vercel.app' } };
    assert.strictEqual(checkReferer(req), true);
  });

  it('should return true when a valid origin but no referer is provided', () => {
    const req = { headers: { origin: 'http://127.0.0.1:8080' } };
    assert.strictEqual(checkReferer(req), true);
  });

  it('should return false when an invalid referer is provided', () => {
    const req = { headers: { referer: 'http://malicious.com' } };
    assert.strictEqual(checkReferer(req), false);
  });

  it('should return false when the referer URL cannot be parsed', () => {
    const req = { headers: { referer: 'not a valid url' } };
    assert.strictEqual(checkReferer(req), false);
  });

  it('should support referrer alias for referer header', () => {
    const req = { headers: { referrer: 'http://localhost:3000' } };
    assert.strictEqual(checkReferer(req), true);
  });
});
