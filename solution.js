function solution(food) {
  let result = [];

  for (let i = 1; i < food.length; i++) {
    const count = (food[i] * 0.5) | 0;
    result = result.concat(new Array(count).fill(i));
  }

  return `${result.join("")}0${result.reverse().join("")}`;
}

console.log(solution([1, 3, 4, 6]));
//https://school.programmers.co.kr/learn/courses/30/lessons/134240
