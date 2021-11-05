export const combine = (char: string, chars: string[], length: number): string[] => {

    // Solution using for to parse chars array
    // let result = [char]

    // for(let i = 0; i < chars.length; i++) {
    //     let code = char + chars[i]

    //     if(length > 2) {
    //         result = [...result, ...combine(code, chars, length-1)]
    //     } else {
    //         result.push(code)
    //     }
    // }

    // return result


    // Solution using a reduce to parse chars array and accumulate a result
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
