function expandedForm(num) {
  // Your code here
  const digits = String(num);
  const parts = [];
  
  for (let i = 0; i < digits.length; i++){
    const digit = Number(digits[i]);
    
    if(digit === 0){
      continue;
    }
    
    const zeros = digits.length - i - 1;
    const value = digit * (10 ** zeros);
    
    parts.push(String(value));
  }
  return parts.join(" + ");
}
