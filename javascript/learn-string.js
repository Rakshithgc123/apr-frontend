let str = 'Benglore';

console.log(str)
console.log(str.length)
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.charAt(3));
console.log(str.repeat(2));

let city1 = 'Dharwad'
let city2 = ' Hubbali'

console.log(city1 + " " + city2);
console.log(city1.concat(" ",city2));


let para = 'i live in banglore';
console.log(para.includes("live"));
console.log(para.indexOf("in"));
console.log(para.split(""));
console.log(para.split("").join(""));
console.log(para.split("  "));
console.log(para.split(" "));
console.log(para.split("  ").join(""));


// ptint * patern 


str2 = '*'
let i = 0
for( i ;i< 8;i++)
{
        console.log(str2.repeat(i))
}
let n = 8;



for (let i = n - 1; i >= 1; i--) {
    console.log(str2.repeat(i));
}

for(let i = 1; i <= n ; i++){
  let  str3 ='* ';
  let space = " ";
  console.log(space.repeat(n - i) + str3.repeat(i))
}

for(let i = 1; i <= n ; i++){
  let  str3 ='*';
  let space = " ";
  console.log(space.repeat(n - i) + str3.repeat(i))
}
