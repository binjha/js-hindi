//Imediately Invoked Function Expression (IIFE)

(function chai (){
    //named IIFE
    console.log(`Db connected `);
    
})();

((name)=>{
    console.log(`Db is connected ${name}`);
    
})('binjha ');