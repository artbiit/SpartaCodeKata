function solution(s) {
  const len = s.length;
  const mid = len >> 1;
  return s.slice(mid - (1 - len & 1), mid + 1);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12903
