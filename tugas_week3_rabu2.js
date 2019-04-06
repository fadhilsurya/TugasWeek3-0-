function palindrome(angka) {

    while (true) {
        angka++
        var numSTR = angka.toString()
        var angkaBalik = numSTR.split('').reverse().join('');
        if (numSTR === angkaBalik) {
            return Number(numSTR)
        }

    }
}

console.log(palindrome(8)); // 9
console.log(palindrome(10)); // 11
console.log(palindrome(117)); // 121
console.log(palindrome(175)); // 181
console.log(palindrome(1000)); // 1001