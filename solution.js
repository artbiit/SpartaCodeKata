function solution(s) {
  const len = s.length;
  if (len !== 4 && len !== 6) return false;

  for (let i = 0; i < len; i++) {
    const code = s.charCodeAt(i);
    if (code < 48 || code > 57) return false;
  }

  return true;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12918
