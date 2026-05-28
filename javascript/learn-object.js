let transaction ={
    upi:"abz@ybl",
    number:"1234",
};

console.log(transaction.upi);
console.log(transaction['upi']);

// adding a element
transaction["account"] ='icic';
console.log(transaction)

// object methods

console.log(Object.keys(transaction));
console.log(Object.values(transaction));

let obj1 = {
    name: "David",
    age:20,
};
let obj2 = {
    name:"Johnson",
    city:"Banglore",
};
// merging objects 
Object.assign(obj1,obj2);
console.log(obj1);



// arry of aobject 

let transactions = [
    {upi:"a",number:"122",status:"SUCCESS"},
    {upi:"b",number:"123",status:"FAILD"},
    {upi:"a",number:"124",status:"FAILD"},
    {upi:"a",number:"125",status:"SUCCESS"},
];

console.log(transactions.length);

for(let i=0;i < transactions.length;i++) {
    console.log("valie is ",transactions[i])
}
var newArr = [];
for ( let i =0;i<transactions.length;i++){
    console.log("value is ",transactions[i].status);
    if(transactions[i].status=='FAILD'){
        newArr.push(transactions[i]);
    }
}
console.log(newArr);