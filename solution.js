function solution(x) {
  let sum = 0;
  let tmp = x;
  while(tmp > 0){
      sum += tmp % 10;
      tmp = (tmp / 10) | 0;
  }
  
  return !(x % sum)
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12947