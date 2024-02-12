const modalOpenButtons = document.querySelectorAll(".js-modal__btn--open");
// showModal()は背景を含むモーダル表示、show()は背景を含まない
modalOpenButtons.forEach(function (modalOpenButton) {
  modalOpenButton.addEventListener("click", function () {
    // nextElementSibling:同じ階層の次の兄弟要素（HTMLで.js-modal-buttonの次要素にmodalを構成しておく）
    const dialog = this.nextElementSibling;
    dialog.showModal();
  });
});

// 以下、close()を使う場合だが、非推奨のためコメントアウト
// const modalDialog = document.querySelectorAll(".modalDialog");
// const modalCloseButtons = document.querySelectorAll(".js-modal__btn--close");

// モーダルダイアログを表示する際に背景部分がスクロールしないようにする
// dialog.showModal();
// document.documentElement.style.overflow = "hidden";

// modalCloseButtons.forEach(function (modalCloseButton) {
//   modalCloseButton.addEventListener("click", function () {
//     // nextElementSibling:同じ階層の次の兄弟要素（HTMLで.js-modal-buttonの次要素にmodalを構成しておく）
//     const dialog = this.nextElementSibling;
//     modalDialog.close();
//     // モーダルを解除すると、スクロール可能になる
//     document.documentElement.removeAttribute("style");
//   });
// });
