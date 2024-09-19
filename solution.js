function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function solution(n, m) {
  const __gcd = gcd(n, m);
  return [__gcd, (n * m) / __gcd];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12940
