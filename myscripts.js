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


// Contact form sliding in

var contactForm = document.getElementById("contact-form");

  function contact_open() {
    if (contactForm.style.display === 'block') {
      contactForm.style.display = 'none';
    } else {
      contactForm.style.display = 'block';
    }
  }

// Close the Contact form with the close button
function contact_close() {
    contactForm.style.display = "none";
}
