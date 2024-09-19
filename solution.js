function solution(s) {
  let i = 0;

  return s
    .split("")
    .map((v, idx) => {
      if (v === " ") {
        i = 0;
        return v;
      }

      return i++ & 1 ? v.toLowerCase() : v.toUpperCase();
    })
    .join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12930
