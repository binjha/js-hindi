// const bumbleuser=new object()//singleton object 
const bumbleuser={}//non singelton object 

bumbleuser.id="123"
bumbleuser.name="binjha"
bumbleuser.age=18;

// console.log(bumbleuser);
 
const refgularuser={
    email:"bijnjah@gmail.com",
    fullname:{
        username:{
            firstname:"binjha",
            lastname:"purohit"
        }
    }
}
// console.log(refgularuser.fullname.username.lastname);

// comining objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}

// console.log(obj3);

// console.log(bumbleuser);
// console.log(Object.keys(bumbleuser));

// console.log(Object.entries(bumbleuser));
// console.log(Object.values(bumbleuser));


const course={
    coursename:"js in hindi ",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor}=course//insted if this we can write this for clean code


console.log(instructor);









