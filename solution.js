const dayOfTheWeek = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];
function solution(a, b) {
  let year = 2016;
  if (a < 3) {
    a += 12;
    year -= 1;
  }
  let K = year % 100;
  let J = Math.floor(year / 100);

  let index =
    (b +
      Math.floor((13 * (a + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) -
      2 * J) %
    7;
  return dayOfTheWeek[index < 0 ? index + 7 : index];
}

console.log(solution(5, 24));
//https://school.programmers.co.kr/learn/courses/30/lessons/138477
