function solution(my_string) {
    const mo = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < mo.length; i++) {
        let regex = new RegExp(mo[i], 'gi');
        my_string = my_string.replace(regex, '');
    }
    
    return my_string;
}