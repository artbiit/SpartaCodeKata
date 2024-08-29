function solution(arr) {
  if(arr.length === 1){
      return arr[0] === 10 ? [-1] : arr;
  }
   arr.splice(arr.indexOf(Math.min(... arr)), 1);
  return  arr;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/12935
