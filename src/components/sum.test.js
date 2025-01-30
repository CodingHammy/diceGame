const sum = require('./sum');

test('1 + 2 = 3', () => {
  //given
  let a = 1;
  let b = 2;
  //when
  let res = sum(a, b);
  // then
  expect(res).toBe(3);
});

test('-1 + -2 = -3', () => {
  // given
  let a = -1;
  let b = -2;
  // when
  let res = sum(a, b);
  //then
  expect(res).toBe(-3);
});

test('1 + -2 = -1', () => {
  // given
  let a = 1;
  let b = -2;
  // when
  let res = sum(a, b);
  //then
  expect(res).toBe(-1);
});

test('1 + 0 = 1', () => {
  // given
  let a = 1;
  let b = 0;
  // when
  let res = sum(a, b);
  //then
  expect(res).toBe(1);
});

// GIVEN before function BF
// WHEN baviour testing
// THEN bahviour meets hypothosis
