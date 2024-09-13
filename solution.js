function solution(s) {
  return [...s].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join("");
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12917
