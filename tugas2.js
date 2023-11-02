function reverseWordGenerator(teks){
  if(typeof teks !== "string"){
    console.log('Input must be string')
    return
  }
  let teksTemp = ""
  let hasil = ""
  for(let i = 0; i < teks.length; i++ ){
    if(i == teks.length - 1){
      teksTemp += teks[i];
      hasil = teksTemp + hasil;
    } else if(teks[i] == " "){
      hasil = teksTemp + hasil;
      hasil = " " + hasil;
      teksTemp = ""
    } else {
      teksTemp += teks[i]
    }
  }
  console.log(hasil)
}

reverseWordGenerator('Saya suka javascript')