function texto(txt) {
  if(txt.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
  console.log(txt.length);
}

texto("Texto ok!");
texto("Este texto contem mais de dez caracteres!");