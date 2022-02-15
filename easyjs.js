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



