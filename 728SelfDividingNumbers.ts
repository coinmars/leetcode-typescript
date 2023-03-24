function selfDividingNumbers(left: number, right: number): number[] {
  const range = (left: number, right: number): number[] =>
    new Array(right - left + 1).fill(0).map((_, x) => x + left);
  const each = (n: number): number[] =>
    n.toString().split('').map(x => parseInt(x));
  const rule = (n: number): boolean =>
    each(n).every(x => n % x === 0);
  return range(left, right).filter(rule);
};
