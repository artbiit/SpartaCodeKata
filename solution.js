function solution(s) {
  let map = {};
  let result = [];

  for (let i in s) {
    const c = s[i];
    if (!map[c]) {
      result.push(-1);
    } else {
      result.push(i - map[c]);
    }

    map[c] = i;
  }
  return result;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/142086
