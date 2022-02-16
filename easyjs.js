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
    }
    else{
        localStorage.setItem(key,value)
    }
    
}

function easyLoad (key){
 
    if(localStorage.getItem(key).includes('{')){
         return JSON.parse(localStorage.getItem(key))
    }
    else{
        return localStorage.getItem(key)
    }
    
}