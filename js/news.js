


// Colocar botones para opinar sobre la noticia

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

// FIN Colocar botones para opinar sobre la noticia




// A PARTIR DE AQUÍ BAJA Y AÑADE

// (function($) {
//
//   $.fn.visible = function(partial) {
//
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
//
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//   };
//
// })(jQuery);
//
// var win = $(window);
//
// var allMods = $(".panel");
//
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
//
// win.scroll(function(event) {
//
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });
