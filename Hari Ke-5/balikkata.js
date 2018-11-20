function balikKata(kata) {
    var a = kata.length;
    var b = '';
    while (a >= 1) {
        b = b + kata.charAt(a-1);
        a --;
    }
    return b;
}
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS