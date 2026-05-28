let str = "hello i am attending class";

function largestWord(sentence) {
  let arr = sentence.split(" ");
  let large = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > large.length) {
      large = arr[i];
    }
  }
  return large;
}

console.log("longest word :",largestWord(str));