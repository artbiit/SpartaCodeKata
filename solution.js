function solution(temperature, t1, t2, a, b, onboard) {
  const temp = temperature > t2 ? t1 - (temperature - t2) : temperature;
  const INF = Number.MAX_SAFE_INTEGER;

  t1 -= temp;
  t2 -= temp;
  const adjustedTemp = 0;

  const dp = Array.from({ length: onboard.length }, () =>
    Array(t2 + 2).fill(INF)
  );
  dp[0][adjustedTemp] = 0;

  for (let i = 1; i < onboard.length; i++) {
    for (let j = 0; j <= t2 + 1; j++) {
      if (onboard[i] === 1 && (j < t1 || j > t2)) continue;
      let min = INF;

      if (j === 0) {
        min = Math.min(min, dp[i - 1][j]);
        if (j + 1 <= t2 + 1) min = Math.min(min, dp[i - 1][j + 1]);
      } else {
        if (j - 1 >= 0) min = Math.min(min, dp[i - 1][j - 1] + a);
        min = Math.min(min, dp[i - 1][j] + b);
        if (j + 1 <= t2 + 1) min = Math.min(min, dp[i - 1][j + 1]);
      }

      dp[i][j] = min;
    }
  }

  let result = INF;
  for (let j = 0; j <= t2 + 1; j++) {
    result = Math.min(result, dp[onboard.length - 1][j]);
  }

  return result;
}

console.log(solution(28, 18, 26, 10, 8, [0, 0, 1, 1, 1, 1, 1])); // 40
console.log(solution(-10, -5, 5, 5, 1, [0, 0, 0, 0, 0, 1, 0])); // 25
console.log(solution(11, 8, 10, 10, 1, [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1])); // 20
console.log(solution(11, 8, 10, 10, 100, [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1])); // 60

//https://school.programmers.co.kr/learn/courses/30/lessons/214289
