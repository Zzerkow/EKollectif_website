const Title_navbar = document.querySelectorAll('h2');
    
    Title_navbar.forEach((titre) => {
        titre.addEventListener('click', (event) => {
          
          Title_navbar.forEach((titre) => {
    
            if(titre.classList.contains('no-underline')){
            
                titre.classList.remove('no-underline');
                titre.classList.add('underline');
            }
            
           // Enlève la classe "test" du bouton
           event.target.classList.remove('underline');
           // Ajoute la classe "no_test" au bouton
           event.target.classList.add('no-underline');
            
          });
          
        });
    
    }); 

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".Main-Container").classList.remove("hidden");
      } else {
        document.querySelector(".Main-Container").classList.add("hidden");
      }
    
      prevScrollpos = currentScrollPos;
    }; 
