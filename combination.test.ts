import combination from "./combination"

describe('combine', () => {
    // it('combine one char with chars', () => {
    //     expect(combine('a', ['a','b','c'], 3)).toMatchSnapshot()
    // })
})

describe('combination', () => {
    it('combinate all chars', () => {
        expect(combination(['a','b','c'], 2)).toEqual(['a','aa','ab','ac','b','ba','bb','bc','c','ca','cb','cc'])
    })
    // it('combinate all chars', () => {
    //     expect(combination(['a','b','c'], 3)).toMatchSnapshot()
    // })
})