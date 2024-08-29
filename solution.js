function solution(n) {
  var answer = [];
  
  while(n > 0){
      answer.push((n % 10) | 0);
      n = (n / 10) | 0;
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12932
