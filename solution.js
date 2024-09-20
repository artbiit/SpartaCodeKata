function solution(s, n) {
  return [...s]
    .map((value) => {
      if (value === " ") return value; // 공백 처리

      let charCode = value.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + n) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + n) % 26) + 97;
      }

      return String.fromCharCode(charCode);
    })
    .join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12926
