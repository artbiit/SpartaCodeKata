function solution(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      let pairDivisor = n / i;
      if (i !== pairDivisor) {
        sum += pairDivisor;
      }
    }
  }
  return sum;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12928
