var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var Pbulan = '';
tanggal = 1;
bulan = 1;
tahun = 1900;
switch(bulan){
    case 1:
    Pbulan = 'Januari';
    break;
    case 2:
    Pbulan = 'Februari';
    break;
    case 3:
    Pbulan = 'Maret';
    break;
    case 4:
    Pbulan = 'April';
    break;
    case 5:
    Pbulan = 'Mei';
    break;
    case 6:
    Pbulan = 'Juni';
    break;
    case 7:
    Pbulan = 'Juli';
    break;
    case 8:
    Pbulan = 'Agustus';
    break;
    case 9:
    Pbulan = 'September';
    break;
    case 10:
    Pbulan = 'Oktober';
    break;
    case 11:
    Pbulan = 'November';
    break;
    case 12:
    Pbulan = 'Desember';
    break;
    default:
    Pbulan = 'Bulan yang Anda masukan salah';
    break;
}
if(tanggal === 'tanggal yang Anda masukan salah' || tanggal > 31 || tanggal <= 0){
    console.log ('Maaf parameter Tanggal yang Anda masukkan kurang sesuai');
}
else if(Tahun === 'Tahun yang Anda masukan salah' || tahun > 2200 || tahun < 1900){
    console.log ('Maaf parameter Tahun yang Anda masukkan kurang sesuai');
}
else {
    console.log(tanggal, Pbulan, tahun);
}
