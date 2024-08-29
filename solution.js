function solution(num) {
  let i = 0;
  while( i < 500 && num !== 1){
      if((num & 1) === 0){
          num /= 2;
      }else{
          num = num * 3 +1; 
      }
      i++;
  }
  
  return (i >= 500 ? -1 : i);
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12943
