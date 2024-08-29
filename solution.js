function solution(arr, divisor) {
  arr = arr.filter(num => num % divisor === 0).sort( (a,b) => a-b);
  return arr.length === 0 ? [-1] : arr;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12910
