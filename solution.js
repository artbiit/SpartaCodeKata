function solution(n) {
  let arr = [];
  let i = 1;
  while (n > 0) {
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return arr.reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/68935
