function solution(my_string) {
  const strArr = my_string.split(' ');
  let sum = Number(strArr[0]);

  for (let i = 1; i < strArr.length; i+=2) {
      
    const operator = strArr[i];
    const number = Number(strArr[i + 1]);

    operator === '+' ? (sum += number) : (sum -= number);
  }

  return sum;
}