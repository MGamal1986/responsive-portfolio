const btn = document.querySelector('.btn-expand');
const lCon = document.querySelector('.left-content');
const RCon = document.querySelector('.right-content');
const menu = document.querySelector('.nav-menu');
const menuItem = document.querySelectorAll('.menu-item');
const mainContent = document.querySelector('.main-content');
const btnIcon = document.querySelector('.btn-icon');
const links = document.querySelectorAll('.menu-link');
const icons = document.querySelectorAll('.icons i');
// add event handler
btn.addEventListener('click',toggleClass);

function toggleClass(){
  lCon.classList.toggle('show');
  RCon.classList.toggle('show');
  btnIcon.classList.toggle('close');
  btn.classList.toggle('close');
  menu.classList.toggle("show");
  links.forEach((link)=>{
    link.classList.toggle('show');
  });
  menuItem.forEach(function(item){
    item.classList.toggle('show');
  });

}
