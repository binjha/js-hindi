const user ={
    username:"Binjha ",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username="rashmi"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log("binjha ");
//     let username="rashmi "
    
//     console.log(this.username);
    
    
// }
// chai();
// const chai=function () {
//     console.log("binjha ");
//     let username="rashmi "
    
//     console.log(this.username);
    //still undefined coz of this 
    
// }
// chai();

const chai=  () => {
    console.log("binjha ");
    let username="rashmi "
    
    console.log(this);//if we use this will give a empty objext  and we use .username it will give undefined
    
    
}
//chai();

// const addtwo =(num1,num2) => {
//      return num1+num2;
// }

//const addtwo =(num1,num2) => num1+num2;//this is also arroww function 
const addtwo =(num1,num2) => (num1+num2)//this is also arroww function 

const name =(num1,num2)=>({username :"binjha "})
console.log(name(4,5));



console.log(addtwo(5,4));






