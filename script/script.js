
// bergerMenu
let linksNav =document.getElementById("links-nav");
let linksNavUl =document.getElementById("links-nav-ul");
let btnx =document.getElementById("berger-menu-x");
let btny =document.getElementById("berger-menu-y");

btny.addEventListener("click",function(){
  btnx.style.display = "inline";
  btny.style.display = "none";
  linksNav.style.display = "flex";
});
btnx.addEventListener("click",function(){
  btny.style.display = "inline";
  btnx.style.display = "none";
  linksNav.style.display = "none";
});

// end berguerMenu


let buyInfo = document.getElementById("buy-info-id");
let btnrent = document.getElementById("rent");

btnrent.addEventListener("click", function () {

    if(buyInfo.style.display = "flex"){
        buyInfo.style.display = "none"
    }
    
});