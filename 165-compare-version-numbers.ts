function compareVersions(v1: string, v2: string): number {
  const v1Arr = v1.split('.').map(Number);
  const v2Arr = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
    const num1 = i < v1Arr.length ? v1Arr[i] : 0;
    const num2 = i < v2Arr.length ? v2Arr[i] : 0;

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}
