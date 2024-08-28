function solution(angle) {
  return ((angle / 90 ) | 0) + (angle > 90) + 1;
}
///https://school.programmers.co.kr/learn/courses/30/lessons/120829
//js에서 Number 와 bool 타입의 연산은 bool을 true - 1, false - 0 으로 변환함