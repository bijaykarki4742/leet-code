function strStr(haystack: string, needle: string): number {
    for(let i= 0; i < haystack.length - needle.length +  1; i++){
        if(haystack.slice(i, needle.length + i) === needle){
            return i
        }
    }
    return -1
};