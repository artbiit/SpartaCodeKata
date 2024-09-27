function solution(k, m, score) {
  const count = Array(k + 1).fill(0);
  for (let i = 0; i < score.length; i++) {
    count[score[i]]++;
  }

  const sortedScore = [];
  for (let i = k; i >= 1; i--) {
    while (count[i] > 0) {
      sortedScore.push(i);
      count[i]--;
    }
  }

  let answer = 0;
  const length = Math.floor(sortedScore.length / m);

  for (let i = 0; i < length; i++) {
    let index = i * m + m - 1;
    answer += m * sortedScore[index];
  }

  return answer;
}

function solution2(k, m, score) {
  let bucket = new Array(k + 1).fill(0);
  let answer = 0;
  let totalCount = 0;

  for (let i = 0; i < score.length; i++) {
    bucket[score[i]]++;
  }

  for (let i = k; i >= 1; i--) {
    while (bucket[i] > 0) {
      totalCount++;
      if (totalCount % m === 0) {
        answer += i * m;
      }
      bucket[i]--;
    }
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/135808
