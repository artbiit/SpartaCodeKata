function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    const currentCount = ((n / a) | 0) * b;
    result += currentCount;
    n = (n % a) + currentCount;
  }
  return result;
}

console.log(solution(2, 1, 20));
//https://school.programmers.co.kr/learn/courses/30/lessons/134240
