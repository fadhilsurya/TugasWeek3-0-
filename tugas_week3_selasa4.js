var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(arr) {
    var name = 'Roman Alamsyah Elsharawy';
    var gender = 'Pria';
    var province = 'Provinsi Bandar Lampung';
    var school = 'SMA Internasional Metro';
    arr.splice(1, 2, name, province);
    arr.splice(4, 1, gender, school);
    console.log(arr);
    var dateArr = arr[3].split('/');
    var month = dateArr[1];
    switch (month) {
        case '01':
            month = 'Januari'
            break;
        case '02':
            month = 'Februari';
            break;
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break;
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break;
        default:
            break;
    }
    console.log(month);
    var dateArrSorted = dateArr.slice(0);
    dateArrSorted = dateArrSorted.sort((a, b) => b - a);
    console.log(dateArrSorted);
    console.log(dateArr.join('-'));
    var slicedName = arr[1].slice(0, 15);
    console.log(slicedName)
}