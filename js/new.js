/*- results-wrinkles-slider -*/
var swiper = new Swiper(".results-wrinkles-slider", {
	autoplay: false,
    autoHeight: false,
    loop: false,
    speed: 1000,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    touchRatio: 0,
    breakpoints: {
      0: {
      	loop: true,
      	slidesPerView: 1,
    	slidesPerGroup: 1,
        spaceBetween: 20,
        touchRatio: 1,
      },
      767: {
      	loop: true,
      	slidesPerView: 2,
    	slidesPerGroup: 1,
        spaceBetween: 20,
        touchRatio: 1,
      },
      1300: {
      	loop: false,
      	slidesPerView: 3,
    	slidesPerGroup: 3,
        spaceBetween: 20,
        touchRatio: 0,
      },
    },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		},
	});