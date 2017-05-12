
$(window).resize(function() {
    colocarBotones();
});

$(document).ready(function() {
    colocarBotones();
});

function colocarBotones(){
    if($(window).width() <=700) $('#buttons').addClass("btn-group-vertical");
    else $('#buttons').removeClass("btn-group-vertical");
}
