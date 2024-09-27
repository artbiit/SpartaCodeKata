function solution(k, m, score) {
  score.sort((a, b) => b - a);
  var answer = 0;
  for (let i = 0; i < score.length / m; i++) {
    let index = i * m + m - 1;
    if (!score[index]) {
      continue;
    }
    answer += m * score[i * m + m - 1];
  }
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/135808
