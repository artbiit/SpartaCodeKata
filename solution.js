function solution(n) {
  n = n & (Number.MAX_SAFE_INTEGER - 1); //짝수로 변경
  // 2 * (k * (k + 1)) / 2 = k * (k + 1)
  n >>= 1;  
 return n * (n + 1);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120831