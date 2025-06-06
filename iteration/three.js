//for of

// ["","",""]
// [{},{},{}]

const myArray = [1, 2, 3, 4, 5];
for (const num of myArray) {
  // console.log(`value is ${myArray}`);
  // console.log(`value is ${num}`);
}

const greeting = "hello binjha ";

for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
  // console.log(`Each char is ${greeting}`);
}

//maps
 const map=new Map()
 map.set('in',"India ")
 map.set('usa',"united states of america")
 map.set('fr',"france ")
 map.set('in',"India ")

//  console.log(map)

 for (const [key,value] of map) {
    console.log(key ,':-',value);
    
    
 }

 const myobject={
    "name":"binjha",
    "age":25,
 }

//  for (const [key,Value] of myobject) {
//     console.log(key,value)
//  }
