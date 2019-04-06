var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "4/05/1989", "Membaca"];
input.splice(1, 2, 'Roman Alamsyah Alsharawi', 'provinsi bandar lampung', )
input.splice(4, 3, 'pria', 'sma internasional metro')

console.log(input)


var ttl = input[3]
var ttlArray = ttl.split('/')

var dd = ttlArray[0]
var mm = ttlArray[1]
var yy = ttlArray[2]

/* sampe bagian atas berhasil bawahnya failed */


var bulan = mm

switch (bulan) {
    case 01:
        console.log('januari')
        break;
    case 02:
        console.log('februari')
        break;
    case 03:
        console.log('maret')
        break;
    case 04:
        console.log('april')
        break;
    case 05:
        console.log('mei')
        break;
    case 06:
        console.log('juni')
        break;
    case 07:
        console.log('juli')
        break;
    case 08:
        console.log('agustus')
        break;
    case 09:
        console.log('september')
        break;
    case 10:
        console.log('oktober')
        break;
    case 11:
        console.log('november')
        break;
    case 12:
        console.log('desember')
        break;

}
console.log(bulan)