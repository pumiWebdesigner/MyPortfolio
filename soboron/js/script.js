{
  //ｽﾑｰｽﾞｽｸﾛｰﾙ(aﾀｸﾞ_ｸﾘｯｸ)
  jQuery('a[href^="#"]').on("click", function () {
    if (jQuery(this) === jQuery(".js-open-button")) {
      return;
    }
    var header = jQuery(".header").innerHeight();
    var id = jQuery(this).attr("href");
    // #は初期値0,#以外はoffset().top
    var position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top - header;
    }
    jQuery("html,body").animate(
      {
        scrollTop: position,
      },
      300
    );
  });
}

jQuery(".js-input").on("input", function () {
  if (jQuery(this).val().trim() === "") {
    jQuery(this).removeClass("is-active");
    jQuery(".contact-form__button").removeClass("full-inputs");
    return;
  }
  jQuery(this).addClass("is-active");
  if (jQuery(".js-input").length === jQuery(".is-active").length) {
    jQuery(".contact-form__button").addClass("full-inputs");
  }
});

$(document).ready(function () {
  $(".drawer").drawer();
});

// {
//   //to-top(ｽｸﾛｰﾙ後にﾎﾞﾀﾝ表示）
//   jQuery(window).on("scroll", function () {
//     if (100 < jQuery(this).scrollTop()) {
//       jQuery(".to-top").addClass("is-show");
//     } else {
//       jQuery(".to-top").removeClass("is-show");
//     }
//     return false;
//   });
// }
// {
//   //ｱｺｰﾃﾞｨｵﾝ
//   jQuery(".qa-box__q").on("click", function () {
//     jQuery(this).next().slideToggle();
//     jQuery(this).children(".qa-box__icon").toggleClass("is-open");
//   });
// }
// {
//   //ﾓｰﾀﾞﾙ
//   jQuery(".js-close-button").on("click", function (e) {
//     e.preventDefault();
//     var target = jQuery(this).data("target");
//     jQuery(target).hide();
//     return false;
//   });
//   jQuery(".js-open-button").on("click", function (e) {
//     e.preventDefault();
//     var target = jQuery(this).data("target");
//     jQuery("." + target).show();
//     return false;
//   });
// }
// {
//   //新drawer
//   jQuery(".js-drawer").on("click", function (e) {
//     // 今回は効果ないけど、aﾀｸﾞでのページ遷移とかを無効化できる
//     e.preventDefault();
//     let targetClass = jQuery(this).attr("data-target");
//     jQuery("." + targetClass).toggleClass("is-active");
//     return false;
//   });
// }
// {
//   //switer
//   const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     //   direction: "vertical",
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: "true",
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });
// }
// {
// 旧drawer;
//   jQuery(".drawer-icon").on("click", function (e) {
//     e.preventDefault();
//     jQuery(".drawer-icon").toggleClass("is-active");
//     jQuery(".drawer-content").toggleClass("is-active");
//     jQuery(".drawer-background").toggleClass("is-active");
//     return false;
//   });
// }
