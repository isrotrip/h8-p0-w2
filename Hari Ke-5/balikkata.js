function balikKata(kata) {
    var panjangkata = kata.length;
    var gabungkata = '';
    while (panjangkata >= 1) {
        gabungkata = gabungkata + kata.charAt(panjangkata-1);
        panjangkata --;
    }
    return gabungkata;
}
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
