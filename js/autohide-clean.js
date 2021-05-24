var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
  //show navbar
  if (prevScrollpos > currentScrollPos || currentScrollPos<=0) {
    document.getElementById("navbar").classList.add('scrolled-up');
    document.getElementById("navbar").classList.remove('scrolled-down');
    if (_mobileMenuOpen === true) {
        $("button.navbar-toggler").click();
    }
    console.log(currentScrollPos);
  } 
  else {
    document.getElementById("navbar").classList.remove('scrolled-up');
    document.getElementById("navbar").classList.add('scrolled-down');
    console.log(currentScrollPos);
  }
  prevScrollpos = currentScrollPos;
}