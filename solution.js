function solution(s) {
  let result = 0, index = 0, decimalFactor = 0, sign = 1, character;

 while ((character = s.charCodeAt(index++)) === 32); // 공백 무시

 if (character === 43 || character === 45) { // '+' 또는 '-' 확인
     sign = 1 - 2 * (character === 45);
     character = s.charCodeAt(index++);
 }

 while (character >= 48 && character <= 57 || character === 46) {
     if (character === 46) {
         if (decimalFactor) break; // 두 번째 소수점이 나오면 NaN
         decimalFactor = 1;
     } else {
         result = result * 10 + (character - 48);
         decimalFactor && (decimalFactor *= 10);
     }
     character = s.charCodeAt(index++);
 }

 return index > 1 && !character ? sign * result / (decimalFactor || 1) : NaN;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12925
