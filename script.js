$(function(){
    //If user clicks anywhere else on screen in mobile version, collapse the navbar
    $(".navbar-toggler").blur(function(event){
        var screenWidth=window.innerWidth;
        if(screenWidth<768){
            $("#navbarNavAltMarkup").collapse('hide');
        }
    });

});