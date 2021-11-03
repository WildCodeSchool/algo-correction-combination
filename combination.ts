export const combine = (char: string, chars: string[], length: number): string[] => {
    let result = [char]
    for (let i = 0; i < chars.length; i++) {
        let code = char + chars[i]    
        if (length > 2) {
            result = result.concat(combine(code, chars, length-1))
        } else {
            result.push(code)
        }
    }
    return result
}
const combination = (chars: string[], length: number):string[] => {
    return chars.flatMap(char => combine(char, chars, length)).sort()
}

export default combination
