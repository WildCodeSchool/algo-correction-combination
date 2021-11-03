import combination from "./combination"

describe('combination', () => {
    it('combinate all chars', () => {
        expect(combination(['a','b','c'], 2)).toEqual(['a','b','c','aa','ab','ac','ba','bb','bc','ca','cb','cc'])
    })
    it('combinate all chars', () => {
        expect(combination(['a','b','c'], 3)).toMatchSnapshot()
    })
})