import combination, { combine } from "./combination"

describe('combine', () => {
    it('combine one char with chars', () => {
        expect(combine('a', ['a','b','c'], 3)).toEqual(['a','aa','aaa', 'aab', 'aac','ab','aba','abb','abc','ac','aca','acb','acc'])
    })
})

describe('combination', () => {
    it('combinate all chars with length 2', () => {
        expect(combination(['a','b','c'], 2)).toEqual(['a','aa','ab','ac','b','ba','bb','bc','c','ca','cb','cc'])
    })
    it('combinate all chars  with length 3', () => {
        expect(combination(['a','b','c'], 3)).toEqual([
            "a",
            "aa",
            "aaa",
            "aab",
            "aac",
            "ab",
            "aba",
            "abb",
            "abc",
            "ac",
            "aca",
            "acb",
            "acc",
            "b",
            "ba",
            "baa",
            "bab",
            "bac",
            "bb",
            "bba",
            "bbb",
            "bbc",
            "bc",
            "bca",
            "bcb",
            "bcc",
            "c",
            "ca",
            "caa",
            "cab",
            "cac",
            "cb",
            "cba",
            "cbb",
            "cbc",
            "cc",
            "cca",
            "ccb",
            "ccc",
          ])
    })
})
