/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  // adding listener event click - Remove all the active class from option and add the
  // active class for the current clicked option