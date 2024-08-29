function solution(numbers) {
  let sum = 45;
  for(let num of numbers){
      sum -= num;
  }
  return sum;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/86051
