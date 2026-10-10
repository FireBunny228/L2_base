function hasTwoCubeSums(n) {
	//TODO
  const pairs = [];
  const limit  = Math.floor(Math.cbrt(n));
  
  for (let a = 1; a <= limit; a++){
    for(let b = a+1; b <= limit; b++){
      if(a**3 + b**3 === n){
        pairs.push([a, b]);
      }
    }
  }
  
  if(pairs.length < 2){
    return false;
  }
  
  for(let i = 0; i < pairs.length; i++){
    for (let j = 0; j < pairs.length; j++){
      const numbers = [...pairs[i], ...pairs[j]];
      const unique = new Set(numbers);
      
      if(unique.size === 4){
        return true
        }
    }
  } 
  return false;
}
