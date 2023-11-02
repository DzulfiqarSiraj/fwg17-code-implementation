function palindromChecker(teks){
  let hasil = ""
  for(let i = teks.length - 1; i >= 0; i--){
    hasil += teks[i]
  }
  if(hasil === teks){
    console.log('Palindrom')
    return
  }
  console.log('Not Palindrom')
}

palindromChecker('malam')