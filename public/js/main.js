
import { getWindowWidth } from './util.js';

window.onload = function (){

  const navBarToggle = document.getElementById('navbar-toggle');
  const navBar = document.getElementById('navbar');
  const dropdown = document.getElementById('dropdown');

  const moblieBreakPoint = 655;

  navBarToggle.addEventListener('click', () =>{
    dropdown.classList.toggle('active');
    navBar.classList.toggle('expand');
  });

  window.addEventListener('resize', ()=>{
    if(getWindowWidth() > moblieBreakPoint && dropdown.classList.contains('active')){
      navBar.classList.remove('expand');
      dropdown.classList.remove('active');

    }
  });
};
