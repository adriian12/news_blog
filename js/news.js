var noticias_sin_cargar_1 = true;
var noticias_sin_cargar_2 = true;

// Cargar JSONs cuando se hace scroll (dos veces)
$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0 && noticias_sin_cargar_1) {
        noticias_sin_cargar_1 = false;

        $.getJSON("data/1.json", function(jsonObject) {
            cargarNoticias(jsonObject);
        });
    } else if ((scrollHeight - scrollPosition) / scrollHeight === 0 && noticias_sin_cargar_2) {
                noticias_sin_cargar_2 = false;
                $.getJSON("data/2.json", function(jsonObject) {
                    cargarNoticias(jsonObject);
                });
    }
});
// FIN Cargar JSONs cuando se hace scroll (dos veces)

// Cargar JSONs cuando se hace click en el botón
$("#mas-noticias").on("click", function() {
	if (noticias_sin_cargar_1) {
        noticias_sin_cargar_1 = false;

        $.getJSON("data/1.json", function(jsonObject) {
            cargarNoticias(jsonObject);
        });

		$.getJSON("data/2.json", function(jsonObject) {
			cargarNoticias(jsonObject);
		});

    } else if (noticias_sin_cargar_2) {
                noticias_sin_cargar_2 = false;
                $.getJSON("data/2.json", function(jsonObject) {
                    cargarNoticias(jsonObject);
                });
    }
});
// FIN Cargar JSONs cuando se hace click en el botón




// Dibujar noticia a partir de JSON
function cargarNoticias(json){
    $.each(
        json, function( i, noticia) {
            $("#cuerpo-noticias").append("<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'><div class='panel panel-info z-depth-5'><div class='panel-heading'>"+noticia.titulo+"</div><div class='panel-body'><img class='img-responsive' src='"+noticia.imgUrl+"' alt='"+noticia.imgAlt+"' /><div id='fecha'>"+noticia.fecha+"</div></div><div class='panel-footer clearfix'><p>"+noticia.descripcion+"</p><a href='"+noticia.url+"' class='btn btn-primary pull-right'>Leer más...</a></div></div></div>");
        }
    );
}
// FIN Dibujar noticia a partir de JSON


// Colocar botones para opinar sobre la noticia

$(window).resize(function() {
    colocarBotones();
});

$(document).ready(function() {
    colocarBotones();
});

function colocarBotones(){
    if($(window).width() <=700) $("#buttons").addClass("btn-group-vertical");
    else $("#buttons").removeClass("btn-group-vertical");
}
// FIN Colocar botones para opinar sobre la noticia
