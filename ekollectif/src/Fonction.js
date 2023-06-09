    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar-container").classList.remove("hidden");
      } else {
        document.querySelector(".navbar-container").classList.add("hidden");
      }
    
      prevScrollpos = currentScrollPos;
    }; 

    