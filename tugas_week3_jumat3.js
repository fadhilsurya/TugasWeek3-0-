function groupAnimals(animals) {
    // you can only write your code here!
    var result = [];
    while (animals.length > 0) {
        var temp = [];
        var letterIndex = animals[0][0];
        for (var y = 0; y < animals.length; y++) {
            if (letterIndex === animals[y][0]) {
                temp.push(animals[y]);
                animals.splice(y, 1);
                y--;
            }
        }
        result.push(temp);
    }
    result.sort();
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]