$(document).ready(function () {
  $(".ct_hamburger").click(function () {
    $(".ct_middle_navbar ul:not(.ct_dropdown_items ol) ").addClass("show");
  });
  $(".ct_close_bar").click(function () {
    $(".ct_middle_navbar ul:not(.ct_dropdown_items ol) ").removeClass("show");
  });

  // ct_featured_slider Brand Slider S
  $(".ct_featured_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  // ct_featured_slider Brand Slider J

  // ct_recent_work_slider Brand Slider S
  $(".ct_recent_work_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });
  // ct_recent_work_slider Brand Slider E
  // ct_recent_work_slider Brand Slider S
  $(".ct_testimonial_slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // ct_recent_work_slider Brand Slider J
  AOS.init();
  $(window).on("load", function () {
    $(".ct_loader_main").fadeOut("slow");
  });
});
