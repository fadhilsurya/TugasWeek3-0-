function balikKata(halo) {
    var kata = ""
    for (i = halo.length - 1; i >= 0; i--) {
        kata += halo[i]

    }
    console.log(kata)
    return;

}
balikKata('semangat bro')