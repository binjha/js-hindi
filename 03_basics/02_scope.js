if (true) {
  let a = 10;
  const b = 20;
  var c = 30; //var doesnt follow the scope thats why we dont use var
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Binjha ";
  function two() {
    const website = "binjha the coder ";
    // console.log(username);
    
  }
//   console.log(website);
  two();
}
one();


console.log(addone(2))

function addone(num) {
    return num +1
    
}


console.log(ghunu(2));//this will show error 

const ghunu =function (num) {
    
    return num+2
    
}

