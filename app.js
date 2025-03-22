// jQuery
// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(this).toggleClass("is-active");
//   });
// });

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
});
