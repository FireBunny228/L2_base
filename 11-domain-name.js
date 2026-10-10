function domainName(url){
  //your code here
  if (url.startsWith("https://")){
    url = url.slice(8);
  } else if (url.startsWith("http://")){
    url = url.slice(7);
  }
  
  if(url.startsWith("www.")){
    url = url.slice(4);
  }
  
  const dot = url.indexOf(".");
  return url.slice(0,dot);
}
