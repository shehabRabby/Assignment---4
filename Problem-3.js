function  bestTeam( player1, player2 ) {

    if(typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null){
        return 'Invalid';
    }

    const p1 = player1.foul + player1.cardR + player1.cardY;
    const p2 = player2.foul + player2.cardR + player2.cardY;
    
    if(p1 === p2){return 'Tie';}
    else if(p1<p2){return player1.name;}
    else{return player2.name;}   
}

const  player1 ={ name: "Brazil", foul: 12, cardY: 0, cardR: 0 };
const player2 ={ name: "Argentina", foul: 7, cardY: 4, cardR: 1 };
console.log(bestTeam(player1,player2));