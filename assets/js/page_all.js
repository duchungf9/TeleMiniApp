/*!
 * 
 * 
 * 
 * @author HoaBui
 * @version 
 * Copyright 2024. MIT licensed.
 */Telegram.WebApp.expand();
window.addEventListener("touchmove", function (e) {
  if (!e.target.closest('.scroll-section-content')) {
    e.preventDefault();
  }
}, {
  passive: false
});
Telegram.WebApp.ready();
$(document).ready(function () {
  // Check 
  var userAgent = navigator.userAgent || navigator.vendor || window.opera; // Check if the device is an iPad

  function isiPad() {
    return /iPad|Macintosh/.test(userAgent) && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  } // Check if the operating system is macOS


  function isMacOS() {
    return /Mac OS X/.test(userAgent) && !('ontouchstart' in window);
  } // Check if the operating system is Windows


  function isWindows() {
    return /Windows NT/.test(userAgent);
  } // Using the functions to log device or OS


  if (isiPad()) {
    $('.screen-main-contain, .screen-offer-contain, .screen-boost-contain, .screen-loots-contain, .modalBoostSpeed , .modalBoostCloud, .modalBoostStorage, .modalBoostEngine, .modalMinerDaily').addClass('isScaled');
  } else if (isMacOS()) {
    $('.screen-main-contain, .screen-offer-contain, .screen-boost-contain, .screen-loots-contain, .modalBoostSpeed , .modalBoostCloud, .modalBoostStorage, .modalBoostEngine, .modalMinerDaily').addClass('isScaled');
  } else if (isWindows()) {
    $('.screen-main-contain, .screen-offer-contain, .screen-boost-contain, .screen-loots-contain, .modalBoostSpeed , .modalBoostCloud, .modalBoostStorage, .modalBoostEngine, .modalMinerDaily').addClass('isScaled');
  } else {
    console.log("Unknown device or operating system.");
  } // Chuyển đồi tab ở trang Rank và Event


  $('.tab-panel a').click(function () {
    var tabPanel = $(this).data('panel');
    var parent = $(this).data('modal');
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    $(parent).find('.tab-content').removeClass('is-active');
    $(tabPanel).addClass('is-active');
  }); // Total receive tăng từ 0 đến số hiện tại

  $('.countTotalReceive').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: parseFloat($('.countTotalReceive').text())
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(now);
      }
    });
  }); // Đồng hồ đếm ngược

  const initialCountDownTime = 24 * 60 * 60 * 1000; // 24 giờ (hoặc giá trị bạn muốn)

  let countDownDate = new Date().getTime() + initialCountDownTime;

  const updateCountdown = () => {
    const now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      // Reset đồng hồ khi về 0
      countDownDate = new Date().getTime() + initialCountDownTime;
      distance = initialCountDownTime;
    }

    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);
    $(".hour").text(hours.toString().padStart(2, '0'));
    $(".minute").text(minutes.toString().padStart(2, '0'));
    $(".second").text(seconds.toString().padStart(2, '0'));
  };

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}); // Gọi popup thông báo 

function showPopup(msg) {
  $('.popupNotify').addClass('showPopup').text(msg);
  setTimeout(function () {
    $('.popupNotify').removeClass('showPopup');
    ;
  }, 2000);
} // Gọi popup ở trang Loot


function showNotifyLooted(msg) {
  $('.notify-looted-section').addClass('show-notify-looted');
  $('.notify-looted-section .num').html(msg); // When opening the popup

  document.body.classList.add('fixed');
  window.addEventListener("touchmove", function (e) {
    if (!e.target.closest('.scroll-section-content')) {
      e.preventDefault();
    }
  }, {
    passive: false
  }); // When closing the popup

  setTimeout(function () {
    $('.notify-looted-section').removeClass('show-notify-looted');
    document.body.classList.remove('fixed');
  }, 3000);
}

function showModalSlideUp(modalName) {
  $(modalName).addClass('slide-up');
  document.body.classList.add('fixed');
  window.addEventListener("touchmove", function (e) {
    if (!e.target.closest('.scroll-section-content')) {
      e.preventDefault();
    }
  }, {
    passive: false
  });
  var btnClose = $(modalName).find('.btn-close');
  $(btnClose).click(function () {
    $(modalName).removeClass('slide-up');
    document.body.classList.remove('fixed');
  });
}