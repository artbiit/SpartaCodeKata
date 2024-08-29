function solution(n) {
  return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12933