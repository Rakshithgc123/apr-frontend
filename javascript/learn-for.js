// for_in and  for_of 

let arr = [1,2,3,4];

for(let val of arr){
    console.log(val);
}

let str = "Bangalore";

for(let char of str){
    console.log(char);
}

// obj :for in 

let obj = {
    name:"David",
    city:"Banglore",
};

for(let key in obj){
    console.log("Key "+""+obj[key]);

}

// program to find
let city = 'Bangalore';

let freq = {};
for(let char of city){
    freq[char] = (freq[char]||0)+1;
}
console.log(freq)