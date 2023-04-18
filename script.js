

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");



bar.onclick = ()=>{
  navbar.classList.add("active");
}

close.onclick = ()=>{
  navbar.classList.remove("active");
}








