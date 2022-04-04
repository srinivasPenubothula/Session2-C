var myPromise = new Promise(function(fulfill, reject) {
  let a=5;
  if(a!=6){
    fulfill('ok'); 
  }
  else{
    onReject('');  
  }
    });
    
    myPromise.then(
        function(value) {  },

           function onReject(error) {  }
    );
    
      setTimeout(function onReject (error) 
{
    console.log('REJECTED!');
},300);