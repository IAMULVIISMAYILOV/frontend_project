// $('.portfolio-item').isotope({
//   itemSelector: '.item',
//   layoutMode: 'fitRows',
// });

// // var $grid = $('.portfolio-item').isotope({

// // })

// // $('.portfolio-menu').on('click', 'li', function(){
// //   var filterValue = $(this).attr('data-filter');
// //   $grid.isotope({filter: filterValue});

// // $('.portfolio-menu').on('click', 'li', function(){
// //   $(this).activeClass('active').siblings.removeClass('active');
// // });

// $('.portfolio-menu ul li').click (function() {
//   $('.portfolio-menu ul li').removeClass('active');
//   $(this).addClass('active');

//   let selector = $(this).attr('data-filter');
//   $('.portfolio-item').isotope({
//     filter: selector
//   });

//   return false;
// });

$(document).ready(function () {
  $(".slider-florist").slick({
    prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
    
  });
});
