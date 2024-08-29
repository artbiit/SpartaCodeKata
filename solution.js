//조금더 가벼움
function solution(X, Y) {
    
  let obj = {};
  for(let i = 9 ; i >= 0; i --){
    obj[i]=  {x : 0 , y : 0};
  }
  
  for(let i = 0; i < X.length; i++){
    const x = X[i];
    obj[x].x++;
  }
  
  for(let i = 0; i < Y.length; i++){
    const y = Y[i];
    obj[y].y++;
  }


 let result = '';

  for(let key = 9; key >= 0; key--){
    result += key.toString().repeat( Math.min(obj[key].x, obj[key].y ));
  }

  if(result == ''){
    return "-1";
  }

if(result[0] == '0'){
  return "0";
}

return result;

}

//수가 커졌을때 살짝 더 무거워짐
function solutionArr(X, Y) {
  let arrX = Array(10).fill(0);
  let arrY = Array(10).fill(0);

  for (let i = 0; i < X.length; i++) {
    arrX[X[i]]++;
  }
  
  for (let i = 0; i < Y.length; i++) {
    arrY[Y[i]]++;
  }

  let result = '';

  for (let i = 9; i >= 0; i--) {
      result += i.toString().repeat(Math.min(arrX[i], arrY[i]));
  }

  if (result === '') {
    return "-1";
  }

  if (result[0] === '0') {
    return "0";
  }

  return result;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/131128

console.log( solution(	"100", "203045"));