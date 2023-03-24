function uniqueMorseRepresentations(words: string[]): number {
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--",
    "-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let result:string[] = [];
    for(let i=0;i<words.length; i++){
        let str:string = '';
        for(let j=0; j<words[i].length; j++){
            str += arr[words[i][j].charCodeAt(0)-97];
        }
        result.push(str)
    }
    return (new Set(result)).size;
};
