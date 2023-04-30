function numMovesStones(a: number, b: number, c: number): number[] {
    let x = Math.min(a,b,c)
    let z = Math.max(a,b,c)
    let y = a + b + c - x - z;

    let res = []
    res[0] = 2
    if ((z-y) == 1 && (y-x) == 1) {
        res[0] = 0
    } else if ((z-y) <= 2 || (y-x) <= 2) {
        res[0] = 1
    }
    res[1] = (z - x -2)
    return res
};
