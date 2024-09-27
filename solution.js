function solution(k, score) {
  var map = [];
  let min = [];
  for (let i = 0; i < score.length; i++) {
    const currentScore = score[i];
    if (min.length < k) {
      min.push(currentScore);
    } else if (min[0] <= currentScore) {
      min[0] = currentScore;
    }

    min.sort((a, b) => a - b);
    map.push(min[0]);
  }
  return map;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/138477
