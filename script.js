let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

//The classList property is used to manipulate the class list of an element. The toggle() method adds or removes a class from an element depending on whether it already has it or not. So when the menu is clicked, the class 'fa-times' is added to the menu if it doesn't already have it, and removed if it does. Similarly, the class 'active' is added to the navbar if it doesn't already have it, and removed if it does.
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();