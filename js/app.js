const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    spaceBetween: 100,
    effect: 'slide',
    grabCursor: true,
    hashNavigation: {
        replaceState: true,
    },

    // Enable zoom module
    zoom: {
        maxRatio: 2,
        minRatio: 1,
        toggle: true,
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
