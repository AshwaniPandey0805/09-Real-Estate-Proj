// object singleton
 const tinderuser = new Object();

// initilizing value into the tinderuser object
tinderuser.id = 123
tinderuser.name = "ashwani"
tinderuser.email = "ashwanipandey679@gmail.com"
tinderuser.password = "ashwani0805"

// console.log(tinderuser);

// Nesting of object

const regularUser = {
    email : "ashwani@gmail.com",
    fullname : {
        userfullname : {
            firstname : "ashwani",
            lastname : "choudary"
        }
    }
}

// console.log(regularUser);
// console.log("=====================================");

// console.log(regularUser.fullname);

// console.log("=====================================");

// console.log(regularUser.fullname.userfullname);

console.log("=====================================");



// Object assign property
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

const obj4 = { obj1, obj2, obj3};

const obj5 = Object.assign({}, obj1, obj2, obj3);


// spread operator

// const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);

// Dstructuring in objects

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor} = course;

console.log(courseInstructor);
