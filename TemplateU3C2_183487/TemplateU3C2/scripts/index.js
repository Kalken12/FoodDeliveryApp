var count= document.getElementById("count");
async function  fetchData()
{
    try{
       
        let res = await fetch("https://masai-food-api.herokuapp.com/api/meals/india");
        let data = await res.json();
        data = data[0];
        data= data.meals
         //console.log(data)
        
       
        //console.log(typeof meal)
        appendData(data)
    }
    catch(err){
      console.log("erro",err)
    }
}
fetchData()
var cartArr=[];
function appendData(data)
{
   var menu = document.getElementById("menu")
   data.forEach(function(el,index)
   
   {
    
       var box = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.strMealThumb;
        var name = document.createElement("h4");
        name.innerText =el.strMeal;
        var price = document.createElement("h4")
        price.innerText = el.price;
        var btn = document.createElement("button")
        btn.innerHTML = "addtoCart";
        btn.setAttribute("id","addtocart");
        btn.addEventListener("click", function()
        {
            addToCart(el)
        });
       
        box.append(img, name, price,btn);
        menu.append(box)
 });
 function addToCart(el)
 {
  
    el.count = 1;
    cartArr.push(el)
    console.log(cartArr);
    localStorage.setItem("cart",JSON.stringify(cartArr));
    let cartArrLen =  JSON.parse(localStorage.getItem("cart"));
     count.innerHTML= null
    appendCount();

   
 } 
 

}
function appendCount()

{  
    
   let cartArrLen =  JSON.parse(localStorage.getItem("cart"));
    var len = cartArrLen.length;
    count.append(len)
   
 }