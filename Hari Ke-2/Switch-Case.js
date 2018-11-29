var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var Pbulan, Ptanggal, Ptahun = '';
tanggal = 1;
bulan = 1;
tahun = 1900;
switch (bulan) {
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
    	Pbulan = 'salah';
    	break;
}
switch (true) {
    case tanggal >= 1 && tanggal <= 31:
    	Ptanggal = tanggal;
    	break;
    default:
    	Ptanggal = 'salah';
    	break;
}
switch (true) {
    case tahun >= 1900 && tahun <= 2200:
    	Ptahun = tahun;
    	break;
    default: 
    	Ptahun = ('salah');
    	break;
}
switch (true) {
    case Ptanggal === 'salah':
    	console.log('Tanggal harus dalam range 1-31');
    	break;
    case Pbulan === 'salah':
    	console.log('Bulan harus dalam range 1-12');
    	break;
    case Ptahun === 'salah':
    	console.log('Tahun harus dalam range 1900-2200');
    	break;
    default:
    	console.log(Ptanggal, Pbulan, Ptahun);
    	break;
} 
