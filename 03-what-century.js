function whatCentury(year)
{
  // code must go here
  const y = Number(year);
  
  let century;
  if (y % 100 === 0){
    century = y / 100;
  }
  else{
    century = Math.floor(y  / 100) + 1;
  } // либо просто чрез  ceil(y / 100)
  
  const lasttwo = century % 100;
  const last = century % 10;
  
  let ending;
  if (lasttwo === 11 || lasttwo === 12 || lasttwo === 13){
    ending = "th";
  } else if (last === 1){
    ending = "st";
  } else if (last === 2){
    ending = "nd";
  } else if (last === 3){
    ending = "rd";
  } else {
    ending = "th";
  }
  
  return String(century) + ending;

}
