const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");

const shopOpen = document.querySelector(".shopopen-btn");
const shopClose = document.querySelector(".shopclose-btn");
const shopBar = document.querySelector(".shop-bar");

const buyBtn = document.querySelectorAll(".buy");
const value = document.querySelectorAll(".value");

const item={};

buyBtn.forEach(function(btn){
  btn.addEventListener("click", function(e){
  let price = e.currentTarget.nextElementSibling.textContent;
  item.price = price;
  let finalPrice = price.slice(1).trim();
  console.log(finalPrice);
  item.price = finalPrice;


  const cartItem = document.createElement("div");
  cartItem.classList.add(".service");

  cartItem.innerHTML = `<div class="service">
     <img src="./reading-3723751_1920.jpg" alt="">
     <button class="buy">buy me</button>
     <span class="value">$35</span>
 </div>`;

 const cart = document.querySelector(".shopbar-links");

 const total = document.querySelector(".second");

 cart.insertBefore(cart, total);
 alert("item added to cart");


  })
  
})

const cartItem = document.createElement("div");





shopOpen.addEventListener("click", function(){
  shopBar.classList.toggle("show-shopbar");
  })

  shopClose.addEventListener("click", function(){
    shopBar.classList.toggle("show-shopbar");
    })



closeBtn.addEventListener("click", function(){
sidebar.classList.toggle("show-sidebar");
})

navBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
    })

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 80) {
          navbar.classList.add("navbar-fixed");
        } else {
          navbar.classList.remove("navbar-fixed");
        }
      });
