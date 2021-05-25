var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
  //show navbar
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.add('scrolled-up');
    document.getElementById("navbar").classList.remove('scrolled-down');
    document.getElementById("navbar").classList.add('navbar-blur-dark');
    document.getElementById("navbar").classList.remove('navbar-blur');
    if (currentScrollPos == 0 || currentScrollPos < 0) {
      document.getElementById("navbar").classList.add('scrolled-up');
      document.getElementById("navbar").classList.remove('scrolled-down');
      document.getElementById("navbar").classList.add('navbar-blur');
      document.getElementById("navbar").classList.remove('navbar-blur-dark');
    }
    if (_mobileMenuOpen === true) {
        $("button.navbar-toggler").click();
    }
  }
  else if (currentScrollPos == 0 || currentScrollPos < 0) {
    document.getElementById("navbar").classList.add('scrolled-up');
    document.getElementById("navbar").classList.remove('scrolled-down');
    document.getElementById("navbar").classList.add('navbar-blur');
    document.getElementById("navbar").classList.remove('navbar-blur-dark');
  }

  else if (prevScrollpos < currentScrollPos){
    document.getElementById("navbar").classList.remove('scrolled-up');
    document.getElementById("navbar").classList.add('scrolled-down');
  }
  prevScrollpos = currentScrollPos;
}