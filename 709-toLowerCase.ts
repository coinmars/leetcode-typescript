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

作者：james
链接：https://leetcode.cn/problems/to-lower-case/solutions/284586/javascripttypescript-li-yong-asciima-jin-xing-zhua/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
