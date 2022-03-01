function easyDom (selector, content){
    document.querySelector(selector).innerHTML = content;
}

 

async function easyFetch(url,callback, method = 'GET', headers = {}, body ) {

     
    //console.log(body)
    const response = await fetch(url,
        
        {
            "method": method,
            "headers": headers,
            "body": body == undefined ? null : body
        }
        
        
        );

    
    const data = await response.json();
    
    callback(data)
  }

 


function easyClick (selector,callback) {
    document.querySelector(selector)
    .addEventListener('click', callback)
}


function easySave (key, value){
 
    if(typeof value == 'object'){
        localStorage.setItem(key,JSON.stringify(value))
    
    return
    }
    
        localStorage.setItem(key,value)
    
    
}

function easyLoad (key){
 
    
         return JSON.parse(localStorage.getItem(key))
   
    
}




function eastFilter(data,filters) {

    let killOperators = {
        'includes': function(a, b) { return a.includes(b)  },
        '<': function(a, b) { return a < b },
        '>' :  function(a, b) { return a > b },
        '<=' :  function(a, b) { return a <= b },
        '>=' :  function(a, b) { return a >= b },
        '==' :  function(a, b) { return a == b },
        '!=' :  function(a, b) { return a != b },
    }

    
    
    return data.filter(function(val) {


        
        if (typeof filters[2]== 'string' && typeof val[filters[0]]== 'string' ){
            filters[2] = filters[2].toLowerCase()
            val[filters[0]] = val[filters[0]].toLowerCase()
        }
      
      return killOperators[filters[1]](val[filters[0]]   ,filters[2] )
     
    })
  }