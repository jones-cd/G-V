// Dropdown toggle

jQuery(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $(".dropdown").slideToggle();
  });

//Scrolling

$(".link1").click(function() {
    $('html,body').animate({
        scrollTop: $("#link1").offset().top},
        'slow');
  });

$(".link2").click(function() {
    $('html,body').animate({
        scrollTop: $("#link2").offset().top},
        'slow');
  });

  $(".link3").click(function() {
    $('html,body').animate({
        scrollTop: $("#link3").offset().top},
        'slow');
  });
});
