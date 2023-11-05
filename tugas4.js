function sortedArray(arr){

  const arrTemp = [...arr]; //shallow copy

  for(let i = 0; i < arrTemp.length; i++){
    for(let j = i; j < arrTemp.length; j++){
      if(arrTemp[i] <= arrTemp[j]){
        arrTemp[i] = arrTemp[i]
      } else {
        const num = arrTemp[i]
        arrTemp[i] = arrTemp[j]
        arrTemp[j] = num
      }
    }
  }
  
  return arrTemp
}

let arrayAcak = [6,3,7,5,2,9,0,3]
let arrNew = sortedArray(arrayAcak)
console.log(arrayAcak)
console.log(arrNew)
const array = [2,4,5,7,8,4];
const addArray = [1,2,3,19,10,40];
for(let i=0; i<addArray.length;i++){
  array[array.length] = addArray[i];
}
console.log(array)

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

function divideAndSort2(num){
  let strNum = num + "";
  hasil = ""
  arrTemp = [];
  
  for(let i = 0; i < strNum.length; i++){
    arrTemp.push(strNum[i])
    if(strNum[i] === "0" || i === strNum.length - 1){
      arrTemp.sort((a,b) => a-b);
      arrTemp.forEach(item =>{
        if(item === "0"){
          hasil += ""
        }else{
          hasil += item;
        }
      })
      arrTemp = []
    }
  }

  hasil = Number(hasil)
  console.log(hasil)
}

divideAndSort(5956560159466056)
divideAndSort2(5956560159466056)