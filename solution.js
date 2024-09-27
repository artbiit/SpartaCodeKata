function solution(cards1, cards2, goal) {
  let firstCard = 0;
  let secondCard = 0;

  for (const current of goal) {
    if (current === cards1[firstCard]) {
      firstCard++;
    } else if (current === cards2[secondCard]) {
      secondCard++;
    } else {
      return "No";
    }
  }

  return "Yes";
}

//https://school.programmers.co.kr/learn/courses/30/lessons/159994
