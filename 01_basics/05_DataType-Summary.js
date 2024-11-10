// # Primitive datatype

// 7 types : String , Number , Boolean , null , Undefined , Symbol , BigInt

// const  Scorce = false;
// const  numScorce = 100.3;
// const isLoggedIn = false;
// const outSideTemp = null
// let userEmail;

// //symbol 
// const id = Symbol('123')
// const newid = Symbol('123')
// console.log(id == newid); //false
 
// const bignum = 13215425423126343n //bigint


//Reference (Non Primitive)
 
// Array , Objects , Functions 

// const heros = ["a","b","c"];
// console.log(heros)

// let myObj ={
//     name:"somu",
//     age:22,
// }
// const myFunction = function() {
    
//     console.log("HEllo Word");
    
// }


//++++++++++++++++++++++++++++++++++++++++
// stack(Primitive) , Heap(Non-Primitive) Memorys 
 
let myname = "somuu"
let anothername = myname
anothername = "newsomuu"
console.log(anothername);
console.log(myname);
let user ={
    email : "user@gamil.com",
    upi : "upi@ybl"
}

let usertwo = user;
usertwo.email="newuser@gmail.com",
userupi= "newupi@ybl"
