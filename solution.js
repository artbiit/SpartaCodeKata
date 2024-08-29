function solution(X, Y) {
  let arr = Array(10).fill(0);
  const factor = 3_000_000;
    
    if(X.length > Y.length){
        const tmp = X;
        X = Y;
        Y = tmp;
        
    }
  for (let i = 0; i < X.length; i++) {
    arr[X.charCodeAt(i) - 48]++;
    arr[Y.charCodeAt(i) - 48]+= factor;
  }
  
  for (let i = X.length; i < Y.length; i++) {
    arr[Y.charCodeAt(i) - 48]+= factor;
  }

  let result = [];
    for (let i = 9; i >= 0; i--) {
        const value = arr[i];
        const minValue = Math.min(value % factor, (value / factor) | 0);
        if (minValue > 0) {
            result.push(i.toString().repeat(minValue));
        }
    }

    if (result.length === 0) {
        return '-1';
    }
    

    return result[0][0] === '0' ? '0' :  result.join('');
}
//https://school.programmers.co.kr/learn/courses/30/lessons/131128
