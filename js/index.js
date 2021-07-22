// new Swiper(".swiper-container");

// let mySwiper = document.querySelector(".swiper-container").swiper;
// let swiper1 = new Swiper("#swiper1");
// let swiper2 = new Swiper("#swiper2");
// let swiper3 = new Swiper("#swiper3");

$(() => {
  let mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
// $(function() {
//     // var _showTab = 0;
//     // $(".look").each(function(index, element) {
//     //     var $tab = $(this);

//     //     var $defaultshow = $(".slide div", $tab).eq(_showTab).addClass("active");
//     //     $(".control", $tab).click(function() {

//     //         var $this = $(this);
//     //         var _clickTab = $this.attr('key');
//     //         $(_clickTab, $tab).stop().addClass('active').siblings('.active').removeClass("active");
//     //     })
//     // });
//     $('#anchor').click(function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//              scrollTop: $($anchor.attr('href')).offset().top
//           }, 1500, 'easeInOutExpo');
//           event.preventDefault();
//         return false;
//     });

// });

// var swiperbox1 = new Swiper('.lookbox1', {
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         slidesPerView: 1,
//         speed: 400,
//         autoplay: 2500,
//         loop: true
//     });

// var swiperbox2 = new Swiper('.lookbox2', {
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         slidesPerView: 1,
//         speed: 1200,
//         autoplay: 2500,
//         loop: true
//     });
