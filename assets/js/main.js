/*Sets the name of the class of body and header tags as "sticky" when scrolling down.*/
window.addEventListener('scroll', function () {
    document.querySelector('header').classList.toggle("sticky", window.scrollY > 0);
    document.querySelector('body').classList.toggle("sticky", window.scrollY > 0);
});

const activate = () => {
   if(document.querySelector('.context.mobile').className==="context mobile active"){
       const navigationIcon=document.querySelector('.context.mobile');
       navigationIcon.classList.remove('active');

       const navigationBar=document.querySelector('.context.desktop');
       navigationBar.classList.remove('active-bar');
   }else {
       const navigationIcon=document.querySelector('.context.mobile');
       navigationIcon.classList.toggle('active');

       const navigationBar=document.querySelector('.context.desktop');
       navigationBar.classList.toggle('active-bar');
   }
}

