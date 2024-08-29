function solution(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 1) {
      return i;
    }
  }
    return n-1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/87389
