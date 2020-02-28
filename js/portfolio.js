$(document).ready(function() {
  $(function() {
    $("a").bind("click", function(event) {
      var $anchor = $(this);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          200
        );
      event.preventDefault();
    });
  });

  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    //toggle menu
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  };

  navSlide();

});
