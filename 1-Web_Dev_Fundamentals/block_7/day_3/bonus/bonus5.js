const assert = require('assert');

function Verify(psw) {
  if (psw.length < 8) throw new Error('Password should be larger than 8 chars');
  if (!(/\w*[a-z]\w*/.test(psw))) throw new Error('Password should have one lowercase letter at least');
  if (!(/\w*[A-Z]\w*/.test(psw))) throw new Error('Password should have one uppercase letter at least');
  if (!(/\w*[0-9]\w*/.test(psw))) throw new Error('Password should have one number at least');
  return true;
}

assert.throws(() => { Verify('12345678'); });
assert.throws(() => { Verify('abcdefghi'); });
assert.throws(() => { Verify('ABCDEFGHI'); });
assert.throws(() => { Verify('123456789'); });
assert.strictEqual(Verify('Xablau123'), true);
