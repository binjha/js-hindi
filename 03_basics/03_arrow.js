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

function chai() {
    console.log("binjha ");
    
    console.log(this);
    
    
}
chai();


