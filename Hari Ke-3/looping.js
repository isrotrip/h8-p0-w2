//1. Melakukan Looping Menggunakan While
console.log ('1. Melakukan Looping Menggunakan While')

var hitung1 = 2;
console.log ('LOOPING PERTAMA');
while(hitung1<=20){
    console.log(hitung1 + ' - I love coding');
    hitung1 += 2;
}
console.log ('LOOPING KEDUA');
hitung1 = 20;
while(hitung1>=2){
    console.log(hitung1 + ' - I will become fullstack developer');
    hitung1 -= 2;
}

//spasi antar soal
console.log('----------------------');

//2. Melakukan Looping Menggunakan For
console.log('2. Melakukan Looping Menggunakan For')

var hitung2;
console.log('LOOPING PERTAMA');
for(hitung2 = 1; hitung2 <= 20; hitung2 ++){
    console.log(hitung2 + ' - I love coding')
}
console.log('LOOPING KEDUA');
for(hitung2 = 20; hitung2 >= 1; hitung2 --){
    console.log(hitung2 + ' - I will become fullstack developer');
}

//spasi antar soal
console.log('----------------------');

//3. Angka Ganjil dan Genap
//3.1 Problem 1
console.log('3.1 Angka Ganjil dan Genap');

var counter;
for(counter = 1; counter <= 100; counter ++){
    if(counter%2 === 0){
        console.log('GENAP');
    }
    else {
        console.log('GANJIL');
    }
}

//spasi antar problem
console.log('----------------------');

//3.2 Problem 2 (3. Problem 2 - Pertambahan 2, Kelipatan 3)
console.log('3.2 Pertambahan 2, Kelipatan 3')

counter = 1;
while(counter <= 100){
    if(counter%3 === 0){
        console.log(counter + ' KELIPATAN 3');
    }
    else {}
    counter += 2;
}

//spasi antar problem

//3.3 Problem 3 (3. Problem 3 - Pertambahan 5, Kelipatan 6)
console.log('3.3 Pertambahan 5, Kelipatan 6')

console.log('----------------------');
for(counter = 1; counter <=100; counter += 5){
    if(counter%6 === 0){
        console.log(counter + ' KELIPATAN 6');
    }
    else {}
}

//spasi antar problem
console.log('----------------------');

//3.4 Problem 4 (3. Problem 4 - Pertambahan 9, Kelipatan 10)
console.log('3.4 Pertambahan 9, Kelipatan 10')

counter = 1;
while(counter <= 100){
    if(counter%10 === 0){
        console.log(counter + ' KELIPATAN 10');
    }
    else {}
    counter += 9;
}
