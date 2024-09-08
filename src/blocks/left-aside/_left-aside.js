const openBurger = document.querySelector('.burger_button');
 const leftAside = document.querySelector('.left-aside');
 const closeBurger = document.querySelector('.left-aside__burger-button');
 const bodyContent = document.querySelector('body');


 openBurger.addEventListener('click', function(evt){
    evt.preventDefault();
    leftAside.classList.toggle('left-aside--open');
    mainContent.classList.add('call-blur');
    bodyContent.style.overflow = 'hidden';
 });



closeBurger.addEventListener('click', function(evt){
    evt.preventDefault();
    leftAside.classList.remove('left-aside--open');
    mainContent.classList.remove('call-blur');
    bodyContent.style.overflow = 'auto';
})