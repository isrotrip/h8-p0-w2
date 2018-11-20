function xo(str) {
    var a = str.length;
    var x = 0;
    var o = 0;
    while (a >= 1){
        if(str.charAt(a-1) === 'x'){
        x ++;
        }
        else {
        o ++;
        }
    a --;
    }
    if (x - o === 0){
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