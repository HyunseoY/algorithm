function solution(sides) {
    
    // 배열의 최대값, 최소값 구하기
    const maxValue = Math.max.apply(null, sides);
    const minValue = Math.min.apply(null, sides);
    let answer = 0

    console.log('Max : ' + maxValue);
    console.log('<br>');
    console.log('Min : ' + minValue);
    
    // 1. 배열 중 큰 수가 가장 긴 변인 경우
    // 배열 중 큰수-배열 중 작은수+1 =< 나머지 한 변 =< 배열 중 큰 수
    
    for(let i = maxValue-minValue+1 ; i <= maxValue ; i++) answer++
               
    // 2. 나머지 한번이 가장 긴 변인 경우
    // 배열 중 큰수+1 < 나머지 한 변 < 배열 다 더한 수
    
    for(let i = maxValue+1 ; i < maxValue+minValue ; i++) answer++
    
    // 1과 2를 더한값을 반환
    
    return answer
    
}