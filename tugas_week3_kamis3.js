function tentukanDeretAritmatika(arr) {
    var newArr = [];
    for (i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i + 1] - arr[i]);
    }
    for (j = 1; j < newArr.length; j++) {
        if (newArr[j] !== newArr[0]) {
            return false;
        }
    }
    return true;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


/*
function tentukanDeretAritmatika(num){
  var newNum=[];
  // loop pertama mencari perbedaan antara setiap variabel untuk judgement akan dilakukan di loop kedua anchor ke num.
  for (var i = 0; i<num.length-1; i++){
    newNum.push(num[i+1]-num[i])
  }   
  
  // pada hasil loop kedua menggunakan var dari newNum karena sudah dirubah nilainya sesuai dgn loop pertama
  for (var j = 1; j< newNum.length; j++){
      if (newNum[j] !== newNum[0]){
        return false;
      }
  }
  return true;
}



*/