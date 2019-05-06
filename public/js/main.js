
import { getWindowWidth } from './util.js';
window.onload = function (){
const navBarToggle = document.getElementById('navbar-toggle');
const navBar = document.getElementById('navbar');
const moblieBreakPoint = 655;

navBarToggle.addEventListener('click', () =>{
  navBar.classList.toggle('active');
});

window.addEventListener('resize',()=>{
  if(getWindowWidth() > moblieBreakPoint && navBar.classList.contains('active')){
    navBar.classList.remove('active');
  }
});
};
