let room = [];
const colNum = 9; 
const rowNum = 9; 

for (let col = 0; col < colNum; col++) {
    room[col] = [];
    for (let row = 0; row < rowNum; row++) {
        room[col][row] = 'empty';
    }
}

let curColPsn = 2; 
let curRowPsn = 2;

room[curRowPsn][curColPsn] = 'player'; 

console.table(room);

let command = 'forward';


switch (command) {
    case 'forward':
       
        room[curRowPsn][curColPsn] = 'empty'; 
        curRowPsn--; 
        room[curRowPsn][curColPsn] = 'player'; 

        if (room[curRowPsn][curColPsn] = room[1][2]){
            
            console.table(room); 
            console.log('you found a piece of code')
        }
        break;

    case 'back':
        
        room[curColPsn][curRowPsn] = 'empty'; 
        curRowPsn++; 
        room[curColPsn][curRowPsn] = 'player'; 
        break;

    case 'left':
        
        room[curColPsn][curRowPsn] = 'empty'; 
        curColPsn--; 
        room[curColPsn][curRowPsn] = 'player';
        break;

    case 'right':
        
        room[curColPsn][curRowPsn] = 'empty'; 
        curColPsn++; 
        room[curColPsn][curRowPsn] = 'player';
        break;

    default:
        console.log('Невалидна команда');
}


