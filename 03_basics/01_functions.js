function saymyname(){
console.log("b");
console.log("i");
console.log("n");
console.log("j");
console.log("h");
console.log("a");


}
// saymyname()

// function addtwonum(num1,num2) {
//     console.log(num1+num2);
    
// }

// addtwonum(5,7)
// addtwonum(5,"7")
// addtwonum(5,"a")
// addtwonum("5",7)
// addtwonum("5","7")
// addtwonum("a","b")

function addtwonum(num1,num2) {
    // let result=num1+num2
    // return result
    return num1+num2
    
}

const result=addtwonum(5,7)
// console.log("Result is ",result);

function loginuser(username="rashmi "){
    if(!username) {
        console.log("username is required")
        return
        
    }
    return `${username} just logged in `
}
// console.log(loginuser("Binjha "))
// console.log(loginuser())
// console.log(loginuser(""))

function calculateprice( val1,val2,...num) {
    return num
    
}
console.log(calculateprice(200,400,500,1000));

const user={
    username:"binjha ",
    price:5000

}
function handlobject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price} `);
    
    
}

handlobject(user)

handlobject({
    username:"rashmi",
    price:5000
})

const myarray = [200,400,600,800]
function returnsecondValue(getarray) {
    return getarray[1]
    
}
console.log(returnsecondValue(myarray));

console.log(myarray[1]);










