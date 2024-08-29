function solution(a, b) {
  if (a > b) {
    a ^= b;
    b = a ^ b;
    a ^= b;
  }

  return ((b - a + 1) * (a + b)) / 2;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12912
