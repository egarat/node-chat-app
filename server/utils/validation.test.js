const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var testStr = 123;

    expect(isRealString(testStr)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var testStr = '          ';

    expect(isRealString(testStr)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var testStr = 'Egi K    ';

    expect(isRealString(testStr)).toBe(true);
  });
});