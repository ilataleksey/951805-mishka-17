var catalogList = document.querySelector('.catalog__list');
var catalogItems = catalogList.querySelectorAll(".catalog-item__cart");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < catalogItems.length; i++) {
  catalogItems[i].addEventListener("click", function (evt) {
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
