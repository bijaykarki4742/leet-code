function lengthOfLastWord(s: string): number {
    const part = s.trim().split(' ')
    return part[part.length -1].length
};