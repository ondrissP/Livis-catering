(function($){

// scroll------------------------------------------
var nav = $(".navigation"),
navLinks = nav.find("a");

navLinks.on("click", function(event) {
$("html, body").animate({ scrollTop: $(this.hash).offset().top}, 500);
event.preventDefault();
});

// Lightbox for gallery----------------------------
var gallery = $('.gallery')

  var overlay = $("<div/>",  {id: "overlay" });
      overlay
        .appendTo("body")
        .hide();

      gallery
        .find('a')
        .on('click', function(event){
          var href = $ (this).attr('href'),
              image = $ ('<img>', {src: href});

      overlay
        .html(image)
        .fadeIn();
    event.preventDefault();
});
    overlay.on('click', function(){
      overlay.fadeOut();
    });

    $(document).on('keyup', function(event){
     if (event.which === 27) overlay.fadeOut();
    });
})(jQuery);