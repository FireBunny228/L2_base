function findMissing(list) {  
  const n = list.length;
  
  const a = (list[n - 1] - list[0]) / n; //шаг
  
  for (let i = 0; i < n; i++){
    if(list[i+1] - list[i] !== a){
      return list[i]+a;
    }
  }
}