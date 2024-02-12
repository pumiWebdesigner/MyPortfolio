const swiper = new Swiper(".swiper", {
  speed: 500, // 次の画像を読み込む速さ
  loop: true,
  loopedSlides: 3,
  autoplay: {
    delay: 200000, // 次の画像に切替する時間
    disableOnInteraction: false, // スライドのドラッグ等の操作時でも自動再生を無効にしない：false
  },
  effect: "fade", // フワッと切替
  fadeEffect: {
    crossFade: true, // 画像が重ならないように制御
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
