import checkGuess from '../../src/logic/GameLogic';

describe('checkGuess', () => {
  it('should returns true when usersValue matches randomNumber', () => {
    // given
    let a = 1;
    let b = 1;
    // when
    let res = checkGuess(a, b);
    // then
    expect(res).toBe(true);
  });

  it('should returns false when usersValue does not match randomNumber', () => {
    // given
    let a = 1;
    let b = 2;
    // when
    let res = checkGuess(a, b);
    // then
    expect(res).toBe(false);
  });

  it('should correctly turns string input into a number', () => {
    // given
    let correctedValue = '1';
    let b = 1;
    // when
    let res = checkGuess(correctedValue, b);
    // then
    expect(res).toBe(true);
  });
  it('should returns false when a non number is passed in as usersValue', () => {
    // given
    let stringValue = 'WIllie';
    let b = 1;
    // when
    let res = checkGuess(stringValue, b);
    // then
    expect(res).toBe(false);
  });
});
