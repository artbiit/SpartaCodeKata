const solution = (array, commands) => {
  var answer = [];
  for (let c = 0; c < commands.length; c++) {
    const cmd = commands[c];
    answer.push(
      array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b)[cmd[2] - 1]
    );
  }
  return answer;
};
//https://school.programmers.co.kr/learn/courses/30/lessons/42748
