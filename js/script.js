// 浮動選單_監聽網頁滾動
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    var anchorLinks = document.getElementsByClassName('anchor-link');
    for (var i = 0; i < anchorLinks.length; i++) {
        var targetId = anchorLinks[i].firstChild.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var targetPosition = targetElement.offsetTop - 100; // 偏移量，根據需要自行調整

            if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetElement.offsetHeight) {
                // 將之前的活動錨點取消活動狀態
                var activeLinks = document.getElementsByClassName('anchor-link active');
                for (var j = 0; j < activeLinks.length; j++) {
                    activeLinks[j].classList.remove('active');
                }

                // 將目前滾動到的區塊的錨點設置為活動狀態
                anchorLinks[i].classList.add('active');
                anchorLinks[i].firstChild.classList.add('active');
            } else {
                // 若區塊滾動出視窗，則移除活動狀態
                anchorLinks[i].classList.remove('active');
                anchorLinks[i].firstChild.classList.remove('active');
            }
        }
    }
});









// swiper
// Slides per view
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".mynext",
        prevEl: ".myprev",
    },

    // 第一張與最後一張無縫連接
    loop: true,
    // 顯示數量
    slidesPerView: 6.5,
    spaceBetween: 30,
    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            // ↑後半部露出局部
            spaceBetween: 8,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 6.5, //修正斷點顯示數量
            spaceBetween: 10,
        },
    },

});