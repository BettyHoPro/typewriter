const animationSentence = (sentence) => {
  sentence = sentence.split("");
  sentence.push("\n");
  for(let i in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 50 * i)  
  };
}; 

animationSentence("hello there from lighthouse labs");
////note===
/// also can use two setTimeout to print  

// animationSentence('welcome to lighthouse labs');
// const sentence = "hello there from lighthouse labs";
// let timeOut = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, timeOut);
//   timeOut += 50;
// }
// setTimeout(() => {
//   console.log('\n');
// }, timeOut);

