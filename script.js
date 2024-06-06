var body= document.querySelector("body");
var largeBtn = document.querySelector(".largeBtn");
var smallBtn =document.querySelector(".smallBtn"); 

function fontLarge(){
    body.classList.add("largeFont");
}
function fontSmall(){
   body.classList.remove("largeFont");
}

largeBtn.onclick = fontLarge;
smallBtn.onclick = fontSmall;