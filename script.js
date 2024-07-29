var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    autoplay:true,
    loop:true,
    pagination: {
      el:".swiper-pagination",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4.5,
    spaceBetween:25,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
    }, 
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 5.5,
    spaceBetween:25,
    freeMode: true,
    // autoplay:true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 5.5,
    spaceBetween:25,
    freeMode: true,
    // autoplay:true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });