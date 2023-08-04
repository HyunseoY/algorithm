function solution(keyinput, board) {
    // Follwing the borad size, maximun direction length will be limited
    // maximun size is board/2.Math.floor
    const user = [0, 0]
    const maxRange= [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    console.log(maxRange)
    
    // if input the keys more than maximun, that command will be ignore
    keyinput.forEach(direction=>{
        switch(direction) {
            case "up" :
                if (!(user[1] === maxRange[1])) user[1]++
                break;
                                    
            case "down" :
                if (!(user[1] === -maxRange[1])) user[1]--
            
                break;
                
            case "right" :
                if (!(user[0] === maxRange[0])) user[0]++
                
                break;
                
            case "left" :
                if (!(user[0] === -maxRange[0])) user[0]--
                
                break;
                
            default:
                return;
        }
    })
    
   return user;        
}