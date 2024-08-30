// How to store data into memory and also how to access the data that diffrentiate into two types-
 
// Primitive Datatypes- String , Number , Boolean , Null , undefined , Symbol , BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber =2344567221n



// Reference Datatypes (Non Primitive)- Array , Objects , Functions

const heros = ["shaktiman" , "naagraj", "doga"];  //Array


let myObj = {
    name: "Pranam",
    age: 22,
}

const myFunction = function(){
    console.log( );
};


//-----------------------------------------------------------//
 //Stack (Primitive Memory)  we get the copy of the data type

 let ytName="Valscrypt.com";
 let anotherYtname="yt.com";

 console.log(anotherYtname);
 console.log(ytName);

 //Heap (Non-primitive) we get direct reference of the data type

 let userOne =  {
    name:"pranam",
    email: "pranam@gmail.com",

 };

 let userTwo = userOne;

 userTwo.email = "user@gmail.com";
 console.log(userTwo.email , userOne.email);
 
