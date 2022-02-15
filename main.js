easyDom('.text','<span>salut</span>')
easyDom('h1','titre')
easyDom('#id','<span>super lib </span>')






easyFetch("https://strapi-gogokodo.herokuapp.com/api/sources", display )


function display(response){
    console.log(response)
}
