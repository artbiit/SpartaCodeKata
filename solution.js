function measureCount(n) {
  let count = 0;
  const sqrtN = Math.sqrt(n);

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }

  if (sqrtN % 1 === 0) {
    count--;
  }

  return count;
}

function solution(left, right) {
  let agg = 0;
  for (let i = left; i <= right; i++) {
    agg += (measureCount(i) & 1) === 0 ? i : -i;
  }
  return agg;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/77884
