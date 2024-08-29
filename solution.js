function solution(absolutes, signs) {
  return absolutes.reduce((sum, value, i) => sum + value * (signs[i] ? 1 : -1), 0);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/76501
