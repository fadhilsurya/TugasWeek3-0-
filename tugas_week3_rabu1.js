function palindrome(kata) {
    var kataBalik = kata.split('').reverse().join('');
    console.log(kataBalik)


    if (kataBalik === kata) {
        console.log(true)
    } else if (kataBalik !== kata) {
        console.log(false)
    }
}
palindrome('KODOK')
