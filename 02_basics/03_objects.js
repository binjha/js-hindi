//singleton object created by constructor
// Object.create


//object literals

const sym=Symbol("key1")

const Jsuser={
    name:"Binjha",
    "name1":"Rashmu",
    [sym]:"key1",//to define and access symbol
    age:21,
    location:"Delhi",
    email:"binjha@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","tuesday","wednesday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);//other way to call the object 
// console.log(Jsuser.name1);
// console.log(Jsuser[sym])//to print symbol
// console.log(typeof Jsuser[sym])
// console.log(typeof sym);


Jsuser.email="Binjhurashmu@gmail.com"//to chsange the value of object

// Object.freeze(Jsuser)
Jsuser.email="Binjhapookie"
// console.log(Jsuser);

Jsuser.greetings=function(){
    console.log("Hello binjha user")
}

Jsuser.greetings1=function(){
    console.log(`hello binjha ,${this.name}`);
}

// console.log(Jsuser.greetings);//function anyonoums
console.log(Jsuser.greetings());

console.log(Jsuser.greetings1());









