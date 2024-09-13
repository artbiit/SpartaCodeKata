function solution(price, money, count) {
  price *= ((count * (count + 1)) / 2) | 0;
  return money < price ? price - money : 0;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/82612
