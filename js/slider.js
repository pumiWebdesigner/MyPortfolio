const swiper = new Swiper(".swiper", {
  speed: 1000, // 次の画像を読み込む速さ
  loop: true,
  loopedSlides: 3, //3個目の先に1個目を表示してくれる
  autoplay: {
    delay: 3000, // 次の画像に切替する時間
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
});
