document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    // var header = document.getElementById('home');
    document.body.style.paddingTop = navbar_height + 'px';
    if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
    let scroll_top = window.scrollY;
    if(scroll_top < last_scroll_top || document.header.scroll_top==0) {
    el_autohide.classList.remove('scrolled-down');
    el_autohide.classList.add('scrolled-up');
    }
    else {
    el_autohide.classList.remove('scrolled-up');
    el_autohide.classList.add('scrolled-down');
    }
    last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
    }
    // if
    }); 
    // DOMContentLoaded  end
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
  