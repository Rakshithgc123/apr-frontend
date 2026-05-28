let arr = [1, 2, 3, 4, 5, 5, 5, 5];

function printUniq(arr) {
  let removedDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (removedDuplicates.indexOf(arr[i]) == -1) {
      removedDuplicates.push(arr[i]);
    }
  }
  console.log(removedDuplicates);
}
let uniqvalue = printUniq(arr);
console.log(uniqvalue)

// code to find  Aeiou
// hint use includes function 

let str = "hello morning";

function countvowel(sentance){
    let arr = sentance.split("");
    let vowels = ['a','e','i','o','u']
    count = 0;
    for(let i=0; i<arr.length;i++){
        if(vowels.includes(arr[i])){
            count++;
        }

    }
    return count;
}

// find the fatorial of the number 

//5! = 5*4*3*2*1

function fact(num){
    if(num==0){
        return 1;
    }
    let fact = 1;

    for(let i=1;i<=num;i++){
        fact= fact*i
    }
    return fact;
    
}

let op = fact(5);
console.log("factorial",op);




// i/p  let arr=[1,2,3,4,5]
// i/p  let value = 7;
// combination any two number and make output 7
//o/p [ [1,4],[2,3]];


function findIndexpairs(ar,val){
    let op = [];
    for(let i = 0;i <ar.length;i++){
        for(let j= i+1;j<ar.length;j++){
        if(ar[i]+ ar[j]== val){
            op.push([i,j]);
        }
    }
    }
    return op ;
}
value = 7 
let arr2=[1,2,3,4,5]
let out = findIndexpairs(arr2,value);
console.log("pairs are ",out);

