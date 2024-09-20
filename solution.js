function solution(t, p) {
  let tLen = t.length;
  let pLen = p.length;

  let loop = tLen - pLen;
  let pNum = Number(p);
  let count = 0;
  for (let i = 0; i <= loop; i++) {
    let tNum = Number(t.substring(i, i + pLen));
    if (tNum < pNum) {
      count++;
    }
  }
  return count;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/147355
