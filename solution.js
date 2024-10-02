function isPrime(n) {
  if (n <= 1) return 0;

  if (n === 2) return 1;

  if (n % 2 === 0) return 0;

  const sqrtN = Math.sqrt(n);

  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) {
      return 0;
    }
  }

  return 1;
}

function solution(nums) {
  var answer = 0;
  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        answer += isPrime(nums[x] + nums[y] + nums[z]);
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));
//https://school.programmers.co.kr/learn/courses/30/lessons/12977
