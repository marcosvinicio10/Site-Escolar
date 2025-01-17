// Inicialização do Swiper para Aprovados
const swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000, // Troca automática a cada 3 segundos
    },
});

// Inicialização do Swiper para Eventos
const eventsSwiper = new Swiper('.eventsSwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 5000, // Troca automática a cada 5 segundos
    },
});

