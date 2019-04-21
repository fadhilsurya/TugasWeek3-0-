function targetTerdekat(arr) {
    // you can only write your code here!
    var indexX = [];
    var oPosition = 0;
    for (var i = 0; i < arr.length; i++) { // get x & o position
        if (arr[i] === 'x') {
            indexX.push(i);
        } else if (arr[i] === 'o') {
            oPosition = i;
        }
    }
    if (indexX.length === 0) {
        return 0;
    }
    var gap = indexX[0] - oPosition;
    if (gap < 0) {
        gap = Math.abs(gap);
    }
    for (var i = 0; i < indexX.length; i++) {
        var currentGap = indexX[i] - oPosition;
        if (currentGap < 0) {
            currentGap = Math.abs(currentGap);
        }
        if (currentGap < gap) {
            gap = currentGap;
        }
    }
    return gap;



}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2