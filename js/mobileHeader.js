$(document).ready(function() {
  $('#logoText').click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      $('#headerMobileMenu').slideToggle(1000);
    }
    else if (!window.matchMedia("(max-width: 768px)").matches) {
      window.location = "index.html";
    };
  });
});
