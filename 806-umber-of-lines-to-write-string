function numberOfLines(widths: number[], s: string): number[] {
    let map:{[key:string]:number} = {};
    let str:string = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<26; i++){
        map[str[i]] = widths[i];
    }
    let count:number = 0;
    let sum:number = 0;
    for(let i=0,len=s.length; i<len; i++){
        sum+=map[s[i]];
        if(sum >= 100){
            if(sum > 100){
                i--;
            }
            sum = 0;
            count++;
        }
    }
    if(sum){
        count++;
    }else{
        sum = 100;
    }
    return [count,sum];
};
