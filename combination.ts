export const combine = (char: string, chars: string[], length: number): string[] => {

    const result2 = chars.reduce<string []>(
        (acc, value) => {
            const code = char + value
            return length > 2 ? [...acc, ...combine(code, chars, length-1)] 
            : [...acc, code]
        },
        [char]
    )

    return result2
}


const combination = (chars: string[], length: number):string[] => {
    return chars.map(
        char => combine(char, chars, length)
    ).flat(2).sort()
}

export default combination
