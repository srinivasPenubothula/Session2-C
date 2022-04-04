
var promise=new Promise(function(fulfill,reject){
    fulfill('PROMISE VALUE')
    reject()
});
promise.then(console.log);
console.log("MAIN PROGRAM")
  
