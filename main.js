var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

    loop: true,
    autoplay: {
        delay: 3000,
    },
})

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        925: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1215: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    loop: true,
    autoplay: {
        delay: 3500,
    },
})
