
    var promise = new Promise(function (fulfill, reject) {
        fulfill();
        reject();
    });
    promise.then(
        function(value){},
        function(error){}
        );
        setTimeout(function() 
        {
            console.log('FULFILLED!');},300);
    
      
