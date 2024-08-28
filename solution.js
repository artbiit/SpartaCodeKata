function solution(numbers) {
  return numbers.reduce((acc, currentValue) => acc + currentValue, 0) / numbers.length;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12944