var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要分页器

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

})
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}

