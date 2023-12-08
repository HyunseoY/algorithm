function solution(array) {
    const count = {};
    let maxCount = 0;
    let mode = [];

    // 각 숫자가 몇 번 나오는지 세기
    array.forEach(num => {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxCount) {
            maxCount = count[num];
            mode = [num];
        } else if (count[num] === maxCount) {
            mode.push(num);
        }
    });

    // 최빈값이 여러 개인 경우 -1 반환
    if (mode.length > 1) {
        return -1;
    }
    return mode[0];
}
