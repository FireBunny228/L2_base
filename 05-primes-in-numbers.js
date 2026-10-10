function primeFactors(n){
    //your code here
  let result = "";
  let divisor = 2;
  
  while (n > 1){
    let count = 0;
    
    while (n % divisor === 0){
      n = n / divisor;
      count++;
    }
    
    if(count > 0){
      if(count === 1){
        result += "("+divisor+")";
      } else {
        result += "("+divisor+"**"+count+")";
      }
    }
    divisor++;
  }
  return result;
}
