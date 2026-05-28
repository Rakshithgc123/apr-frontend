let para = "i live in banglore eeeeeeeeee";
sp = para.split("");
console.log(sp);
console.log(sp.length);

let count = 0;

for (let i = 0; i < sp.length; i++) {
  if (sp[i] == "e") {
    count++;
  }
}

console.log("E occurance :", count);

// program to find highest number of word in a string

var world_sp = para.split(" ");
console.log(world_sp);
var world_len = "";
for (let i = 0; i < world_sp.length-1; i++) {
  if (world_sp[i].length < world_sp[i + 1].length) {
    world_len = world_sp[i+1];
  }
}
console.log("logest word is   ", world_len);
