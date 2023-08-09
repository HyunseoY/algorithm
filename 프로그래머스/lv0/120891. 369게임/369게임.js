function solution(order) {
  let answer = 0;
  let str = order.toString();

  for (let i = 0; i < str.length; i++) {
    if (["3", "6", "9"].includes(str[i])) {
      answer += 1;
    }
  }

  return answer;
}