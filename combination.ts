const combination = (chars: string[], length: number):string[] => {

    return [...chars, ...chars.map(char => chars.map(char2 => char+char2)).flat(2)]
}

export default combination
