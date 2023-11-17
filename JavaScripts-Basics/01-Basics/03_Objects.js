// object Literals

const jsUser = {
    name : "Ashwani",
    age : 18,
    location : "Mohali",
    email : "ashwanipandey679@gmail.com",
    loginDay : ["Monday", "Saturday"]
}
console.log("==============================================");
jsUser.greetingTwo = function(){
    console.log(`Hello js users, ${this.name}`);
}

console.log(jsUser.greetingTwo());

