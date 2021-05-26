const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
var navbarToggler = document.getElementById('navbarNavDropdown')
$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    //If refreshing page, check current location to prevent unwanted transparent navbar
    /*
    ################
    Add navbar background color when scrolled
    */
    
      if (vw < 750) {
        
        $(".navbar").removeClass("mobile-navbar-dropdown");
        $(".navbar").addClass("mobile-navbar-collapsed");
      } 
      else if (navbarToggler.hasClass("show"))
      {
        $(".navbar").add("mobile-navbar-dropdown");
        $(".navbar").removeClass("mobile-navbar-collapsed");
      }
      else if (vw > 750){
        $(".navbar").removeClass("mobile-navbar-dropdown");
        $(".navbar").removeClass("mobile-navbar-collapsed");
      }
    });


    // ############
  
    // document ready

