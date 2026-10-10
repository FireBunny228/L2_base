function toWeirdCase(string){
  //TODO
  const words = string.split(" ");
  const result = [];
  for (let w = 0; w < words.length; w++){
    const word = words[w];
    let newWord = "";
    
    for(let i = 0; i < word.length; i++){
      if(i%2 === 0){
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    result.push(newWord);
  }
  return result.join(" ");
}