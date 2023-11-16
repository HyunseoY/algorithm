function solution(n) {
    var answer = 0;
    let extra = 0;
    
    if (n%7 >= 1) extra = 1
    
    return answer = Math.floor(n/7) + extra;
}