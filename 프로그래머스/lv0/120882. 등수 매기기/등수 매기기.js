function solution(scores) {
    
    const averages = scores.map(score => (score[0] + score[1]) / 2);
    
    const sortedAverages = [...averages].sort((a, b) => b - a);
    
    // const ranks = sortedAverages.map(average => sortedAverages.indexOf(average) + 1);
    
    const ranks = averages.map(average => sortedAverages.indexOf(average) + 1 )
    
    return ranks;
}