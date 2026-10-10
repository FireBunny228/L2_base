function hexStringToRGB(hexString) {
  const R = hexString.slice(1,3);
  const G = hexString.slice(3,5);
  const B = hexString.slice(5,7);
  
  return {
    r: parseInt(R, 16),
    g: parseInt(G, 16),
    b: parseInt(B, 16)
  };
}
