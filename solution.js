function solution(n) {
  let sqrt = Math.sqrt(n) | 0;

  if(sqrt * (sqrt++) === n){
      return sqrt * sqrt;
  }else{
      return -1;
  }
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12934