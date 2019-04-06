function nilai(num) {
    var nilaiDefault = num.toString()
    var newNum = []
    for (i = 0; i < nilaiDefault.length - 1; i++) {
        newNum.push(nilaiDefault[i] + '' + nilaiDefault[i + 1])
    }
    var maximeeeem = newNum[0]
    for (j = 1; j < newNum.length; j++) {
        if (newNum[j] > maximeeeem) {
            maximeeeem = newNum[j]
        }

    }
    return maximeeeem
}
console.log(nilai(123456789))