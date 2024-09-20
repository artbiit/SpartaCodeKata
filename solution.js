const solution = (strings, n) =>
  strings.sort((a, b) => {
    const compare = a.charCodeAt(n) - b.charCodeAt(n);
    return compare ? compare : a.localeCompare(b);
  });
//https://school.programmers.co.kr/learn/courses/30/lessons/12915
