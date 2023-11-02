function sortedArray(arr){

  let arrTemp = arr;

  for(let i = 0; i < arrTemp.length; i++){
    for(let j = i; j < arrTemp.length; j++){
      if(arrTemp[i] <= arrTemp[j]){
        arrTemp[i] = arrTemp[i]
      } else {
        let num = arrTemp[i]
        arrTemp[i] = arrTemp[j]
        arrTemp[j] = num
      }
    }
  }
  
  return arrTemp
}

function divideAndSort(num){
  let strNum = num + "";
  let hasil = ""
  let arrTemp = []
  
  for(let i = 0; i < strNum.length; i++){
    arrTemp = [...arrTemp, strNum[i]]
    if(strNum[i] === "0" || i === strNum.length -1){
      arrTemp = sortedArray(arrTemp)
      for(let j = 0; j < arrTemp.length; j++){
        if(arrTemp[j] === "0"){
          continue
        }
        hasil = hasil + arrTemp[j]
      }
      arrTemp = []
    }
  }

  hasil = Number(hasil)
  console.log(hasil)
}

divideAndSort(5956560159466056)


