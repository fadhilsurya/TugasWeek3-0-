var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(n) {
    for (j = 0; j <= n; j++) {
        for (i = 0; i <= input[j].length; i++) {

        }
        console.log('nomor: ' + input[j][0])
        console.log('nama: ' + input[j][1])
        console.log('alamat: ' + input[j][2] + ' ' + input[j][3])
        console.log('hobby: ' + input[j][4])
        console.log('\n')

    }
    return





}
dataHandling(3)