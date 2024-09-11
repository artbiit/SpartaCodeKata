function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5], // 1번 수포자의 패턴
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자의 패턴
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자의 패턴
  ];

  const scores = [0, 0, 0]; // 3명의 수포자의 점수를 저장
  let maxScore = 0; // 최고 점수 저장
  let result = []; // 결과로 반환할 인덱스 저장

  // 정답 비교 루프
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
        // 현재 수포자의 점수가 더 높으면 maxScore를 갱신하고 result 초기화
        if (scores[j] > maxScore) {
          maxScore = scores[j];
          result = [j + 1];
        } else if (scores[j] === maxScore) {
          result.push(j + 1); // 동일한 점수인 수포자 추가
        }
      }
    }
  }

  return result.sort((a, b) => a - b); // 결과 오름차순 정렬 후 반환
}
//https://school.programmers.co.kr/learn/courses/30/lessons/42840
