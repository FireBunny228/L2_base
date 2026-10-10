function ipv4Parser(ip, mask){
  //your code here
  const ipParts = ip.split(".").map(Number);
  const maskParts = mask.split(".").map(Number);
  
  const networkParts = [];
  const hostParts = [];
  
  for(let i = 0; i < 4; i++){
    const ipX = ipParts[i];
    const maskX = maskParts[i];
    
    networkParts.push(ipX & maskX);
    
    hostParts.push(ipX & (~maskX) & 255);
  }
  const network = networkParts.join(".");
  const host = hostParts.join(".");
  
  return [network, host];
}
