function solution(strlist) {
    let answer = [];
        
    for (let i = 0; i < strlist.length; i++) {
        answer[i] = strlist[i].length;
        answer.push(answer[i]);
    }
    
    answer.pop();
    
    return answer;
}