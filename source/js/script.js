var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modalOpen = document.querySelectorAll(".js-modal__open");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

for (var i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--opened");
  overlay.classList.add("overlay--shown");
});
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--opened");
  overlay.classList.remove("overlay--shown");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--opened")) {
      modal.classList.remove("modal--opened");
      overlay.classList.remove("overlay--shown");
    }
  }
});
