function isCircleSorted( arr ){
  // ...
  let drops = 0;
  
  for(let i = 0; i < arr.length; i++){
    const next = arr[(i+1) % arr.length];
    
    if(arr[i]>next){
      drops++;
    }
  }
  return drops <= 1;
}