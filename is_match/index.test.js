const isMatch = require('./index')

describe('Is Match', () => {
  it('returns true when key value pair is present', () => {
    const moe = {name: 'Moe Howard', hair: true}
    expect(isMatch(moe, {hair: true})).toBe(true)
  })
  it('returns false when key value pair isn\'t present', () => {
    const curly = {name: 'Curly Howard', hair: false}
    expect(isMatch(curly, {hair: true})).toBe(false)
  })
})