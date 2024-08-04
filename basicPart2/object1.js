const mysym=Symbol("key1");
const obj1={
    name:"Rajan",
    [mysym]:"mykey1",
    "full name": "hamesh kumar",
    roll_number:101,
    location: "jaipur",
    email: "sanjay1978chauhan@gmail.com",
}
// Object.freeze(obj1);
obj1.email="sanjay1978chauhan@hotmail.com"
obj1.greeting1=function abc()
{
    console.log("hello my greeting");
    
}
obj1.greeting2=function abc()
{
    console.log(`hello mr ${this["full name"]}`);
    
}
// console.log(obj1.name);
// console.log(obj1["full name"]);
// console.log(typeof mysym);
console.log(obj1);
console.log(obj1.greeting1());
console.log(obj1.greeting2());



