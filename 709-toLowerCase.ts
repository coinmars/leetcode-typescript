function toLowerCase(str: string): string {
  const upperRange = { min: 65, max: 90 };
  const lowerArr = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= upperRange.min && code <= upperRange.max) {
      lowerArr.push(String.fromCharCode(code + 32));
    } else {
      lowerArr.push(str[i]);
    }
  }
  const result = lowerArr.join("");
  return result;
}
