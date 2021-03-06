(function ($) {
  // scroll------------------------------------------
  var nav = $(".navigation"),
    navLinks = nav.find("a");

  navLinks.on("click", function (event) {
    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 500);
    event.preventDefault();
  });

  // back to top-----------------------------------------------
  var backToTop = $("<a>", {
    href: "#",
    class: "back-to-top",
    html: `<i class="fas fa-arrow-up"></i>`,
  });

  backToTop
    .hide()
    .appendTo("body")
    .on("click", function () {
      $("html, body").animate({ scrollTop: 0 });
    });
  var win = $(window);
  win.on("scroll", function () {
    if (win.scrollTop() >= 750) backToTop.fadeIn();
    else backToTop.fadeOut();
  });

  // Lightbox for gallery----------------------------
  var gallery = $(".slider");

  var overlay = $("<div/>", { id: "overlay" });
  overlay.appendTo("body").hide();

  gallery.find("img").on("click", function (event) {
    var src = $(this).attr("src"),
      image = $("<img>", { src: src });

    overlay.html(image).fadeIn();
    event.preventDefault();
  });
  overlay.on("click", function () {
    overlay.fadeOut();
  });

  $(document).on("keyup", function (event) {
    if (event.which === 27) overlay.fadeOut();
  });

  // Responsive navigation---------------------------
  var navCover = $("#nav-cover");
  navCoverLinks = $("#nav-cover a");
  navCover.hide();

  $(".nav-icon").click(function () {
    var navCover = $("#nav-cover");
    navIcon = $(".nav-icon i");

    navCover.slideToggle(200);
    switchClass();
  });
  navCoverLinks.on("click", function () {
    navCover.slideToggle();
    switchClass();
  });

  function switchClass() {
    if (navIcon.hasClass("fa fa-bars")) {
      navIcon.addClass("fas fa-times");
      navIcon.removeClass("fa fa-bars");
    } else {
      navIcon.addClass("fa fa-bars");
      navIcon.removeClass("fas fa-times");
    }
  }

  // Gallery slider-------------------------------

  var next = $(".next");
  var slider = $(".slider");

  next.on("click", function () {
    var currentImg = $(".active"),
      nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    } else {
      currentImg.removeClass("active").css("z-index", -10);
      slider.children(":first").addClass("active").css("z-index", 10);
    }
  });
})(jQuery);
