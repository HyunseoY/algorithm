function solution(spell, dic) {
    
    // 어떤 스펠의 배열이 있을 때(spell)
    // 배열의 요소를 모두 포함한 문자열(dic)이 있으면 1, 없으면 2
    
    for (let word of dic) {
        if (spell.every(char => word.includes(char))) {
            return 1;
        }
    }
    return 2;
}