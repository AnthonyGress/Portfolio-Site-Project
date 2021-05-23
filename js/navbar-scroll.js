var splash = document.getElementById('splash-img');

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    //If refreshing page, check current location to prevent unwanted transparent navbar
    if (isElementInViewport(splash)){
      $(".navbar").removeClass("active");
    }
    else {
      $(".navbar").addClass("active");
    }
  
    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("active");
      } 
      else {
        $(".navbar").removeClass("active");
      }
    });
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("mobile-active");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("mobile-active");
        } else {
        }
      }
    });
    // ############
  
    // document ready
  });
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
