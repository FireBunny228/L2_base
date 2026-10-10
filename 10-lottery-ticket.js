function bingo(ticket, win){
  let miniWin = 0;
  
  for(let i = 0; i<ticket.length; i++){
    const letters = ticket[i][0];
    const num = ticket[i][1];
    
    for (let j = 0; j < letters.length; j++){
      if (letters.charCodeAt(j) === num){
        miniWin++;
        break;
      }
    }
  }
  if(miniWin >= win){
    return "Winner!";
  } else {
    return "Loser!";
  }
}
