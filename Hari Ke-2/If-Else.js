var nama = '';
var peran = '';//isi peran dengan variabel string Ksatria, Tabib, atau Penyihir

if (!nama) {
    console.log('Nama harus diisi!');
}
else if (!peran){
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
else if (peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('"Halo ' + peran, nama + ', kamu dapat menyerang dengan senjatamu!"');
}
else if (peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('"Halo ' + peran, nama + ', kamu akan membantu temanmu yang terluka.');
}
else if (peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('"Halo ' + peran, nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
else {
    console.log('Halo ' + nama + ', Maaf peranmu tidak tersedia');
}