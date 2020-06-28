const {evenCharacters} = require('./evenCharacters');

describe('evenCharacters', () => {
  const INVALID_RESPONSE = 'invalid string';

  test('returns invalid for a string that is less than 2 characters', () => {
    expect(evenCharacters('z')).toEqual(INVALID_RESPONSE);
  });

  test('returns invalid for a string that is longer than 100 characters' , () => {
    const hundredChars = 'a'.repeat(101);
    expect(evenCharacters(hundredChars)).toEqual(INVALID_RESPONSE);
  });

  test('return every second character from string', () => {
    const string = 'abcdefg';
    const expected = ['b','d','f'];
    expect(evenCharacters(string)).toEqual(expect.arrayContaining(expected));
  });

  test('return every second character from string', () => {
    const string = 'abcdefghijklmnopqrstuvwxyz';
    const expected = ['b','d','f','h','j','l','n','p','r','t','v','x','z'];
    expect(evenCharacters(string)).toEqual(expect.arrayContaining(expected));
  });
});