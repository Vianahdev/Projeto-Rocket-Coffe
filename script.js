const btnMobile = document.querySelector('button#btn-mobile');

function toggleMenu(){
  const nav = document.querySelector("nav#nav-bar-mobile");
  nav.classList.toggle('active');

   const img = document.querySelector("#btn-mobile img")

   if (nav.classList.contains('active')) {
    img.setAttribute("src", "assets/menu-buguer-close.svg")
   } else{
     img.setAttribute("src", "./assets/menu-buguer-open.svg")
   }
}

btnMobile.addEventListener('click', toggleMenu);

//
const text = document.querySelector('h1#stroke');
text.innerText = '<Great Code/>'