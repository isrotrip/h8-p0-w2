//1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');

var rows1;
rows1 = 4; //jumlah row yang ingin ditentukan
while(rows1 >= 1){
    console.log('*');
    rows1 --;
}

//spasi antar problem
console.log('----------------------');

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');

var rows2;
var jumlahbintang;
var bintang = '';
rows2 = 5; //jumlah row yang ingin ditentukan
jumlahbintang = rows2;
for (rows2 ; rows2 >= 1; rows2 --){
    while(jumlahbintang >= 1){
        bintang = bintang + '*';
        jumlahbintang --;
    }
    console.log(bintang);
}

//spasi antar problem
console.log('----------------------');

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping')

var rows3;
var jumlahbintang3;
var bintang3 = '';
rows3 = 6; //jumlah row yang ingin ditentukan
jumlahbintang3 = rows3;
while (rows3 >= 1){
    for(var i = 0; i <= jumlahbintang3 - rows3 ; i ++){
        bintang3 = bintang3 + '*';
    }
    console.log(bintang3);
    rows3 --;
    bintang3 = '';
}

//spasi antar problem
console.log('----------------------');