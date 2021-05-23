(function() {
  var userPrefersDark =  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var darkSwitch = document.getElementById("darkSwitch");
  if(userPrefersDark){
    localStorage.setItem("darkSwitch", "dark");
  } 
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function(event) {
      resetTheme();
    });
    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.setAttribute("data-theme", "light");
      if (darkThemeSelected){
        $('#html-img').attr('src','img/html-dark.png')
        $('#css-img').attr('src','img/css-dark.png')
        $('#js-img').attr('src','img/js-dark.png')
        $('#macos-img').attr('src','img/macos-dark.png')
        $('#linux-img').attr('src','img/linux-dark.png')
        $('#splash-img').attr('src','img/dark-splash.jpg');
      } else {
        $('#html-img').attr('src','img/html.png')
        $('#css-img').attr('src','img/css.png')
        $('#js-img').attr('src','img/js.png')
        $('#macos-img').attr('src','img/macos.png')
        $('#linux-img').attr('src','img/linux.png')
        $('#splash-img').attr('src','img/blue_mountains.jpg');
      }
    }
    function resetTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
        $('#html-img').attr('src','img/html-dark.png');
        $('#css-img').attr('src','img/css-dark.png');
        $('#js-img').attr('src','img/js-dark.png');
        $('#macos-img').attr('src','img/macos-dark.png');
        $('#linux-img').attr('src','img/linux-dark.png');
        $('#splash-img').attr('src','img/dark-splash.jpg');
      } else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("darkSwitch", "light");
        $('#html-img').attr('src','img/html.png');
        $('#css-img').attr('src','img/css.png');
        $('#js-img').attr('src','img/js.png');
        $('#macos-img').attr('src','img/macos.png');
        $('#linux-img').attr('src','img/linux.png');
        $('#splash-img').attr('src','img/blue_mountains.jpg');
      }
    }
  }
    
})();
