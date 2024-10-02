function getModValue(row, row_num) {
  return row.reduce((acc, cur) => acc + (cur % row_num), 0);
}

function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    const aCol = a[col - 1];
    const bCol = b[col - 1];

    if (aCol === bCol) {
      return b[0] - a[0];
    }

    return aCol - bCol;
  });
  let result = getModValue(data[row_begin - 1], row_begin);
  for (let i = row_begin; i < row_end; i++) {
    result ^= getModValue(data[i], i + 1);
  }

  return result;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
//https://school.programmers.co.kr/learn/courses/30/lessons/147354
