/*Sets the name of the class of body and header tags as "sticky" when scrolling down.*/
window.addEventListener('scroll',function (){
   document.querySelector('header').classList.toggle("sticky",window.scrollY>0);
   document.querySelector('body').classList.toggle("sticky",window.scrollY>0);
});
