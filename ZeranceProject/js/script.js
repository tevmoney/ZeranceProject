/* Slider */

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: true,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: screenLeft,
    });
  });

  /* Popup Form */

  // Validation des champs vides
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Renseignez tous les champs !");
    } else {
    document.getElementById('form').submit();
    alert("Message envoyé...");
    }
    }
    //Fonction d'ouverture du popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Fonction de fermeture du popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }
