// this key word in javaScript
// this key word in JavaScript decribe corruent context of an object
// const user = {
//     username : "ashwani",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();

// arrow function

// const chai  = function(){
//     let username = "Ashwani"
//     console.log(this.username);
// }

// console.log(chai())
// TypeError: Cannot read properties of undefined (reading 'username')

// const chai = function(){
//     let username = "ashwani"
//     console.log(username);
// }

// chai();


let username = "ashwani"

const chai = (username)=>{
    
    console.log(username);
}

chai(username);
