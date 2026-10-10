function longest(arr, n) {
//code me
  const items = [];
  
  for(let i = 0; i < arr.length; i++){
    items.push({text: arr[i], index: i});
  }
  items.sort(function(a,b){
    if(b.text.length !== a.text.length){
    return b.text.length - a.text.length;
    }
    return a.index - b.index;
  });
  return items[n - 1].text;
}
