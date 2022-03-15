var cartItem = JSON.parse(localStorage.getItem("cart"))||[];
var total_price = document.getElementById("total-price");
console.log(cartItem)
var cart = document.getElementById("cart");
cartItem.map(function(el,index)
{
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.strMealThumb;
    var name = document.createElement("h4");
    name.innerText =el.strMeal;
    var price = document.createElement("h4")
    price.innerText = el.price;
    var btn = document.createElement("button")
    btn.innerHTML = "Remove";
    btn.setAttribute("id","remove")
    btn.addEventListener("click", function()
    {
        removeFromCart(el,index)
    })
    box.append(img, name, price,btn);
    cart.append(box);
});

function removeFromCart(el,index)
{
    
     let existItem = JSON.parse(localStorage.getItem("cart"))
     existItem.splice(index,1);
     localStorage.setItem("cart",JSON.stringify(existItem))
     window.location.reload();
     priceAdd(el);
  
}

 priceAdd()
 
function priceAdd()
{ 
  var sum=0;
    let existItem = JSON.parse(localStorage.getItem("cart"));
    existItem.map(function(el, index)
    {
       sum = sum+(+el.price);
    });
   console.log("price:",sum)
   total_price.append(sum)

   
}

document.getElementById("checkout").addEventListener("click", gotoCheckOut)
function gotoCheckOut(){
window.location.href ="./checkout.html"
}

