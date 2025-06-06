const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //console.log(val);  // Now this will print
});

coding.forEach((item) => {
  //console.log(item);
});

function printitem(item) {
 // console.log(item);
}

coding.forEach(printitem)

coding.forEach( (item, index, arr)=> {
    //console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(myCoding);
    
    
})