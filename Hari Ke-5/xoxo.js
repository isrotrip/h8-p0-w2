function xo(str) {
    var panjangkata = str.length;
    var jumlahx = 0;
    var jumlaho = 0;
    while (panjangkata >= 1){
        if(str.charAt(panjangkata-1) === 'x'){
        jumlahx ++;
        }
        else {
        jumlaho ++;
        }
    panjangkata --;
    }
    if (jumlahx - jumlaho === 0){
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
