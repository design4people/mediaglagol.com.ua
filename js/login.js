var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  <!-- login.focus(); -->
  if (storage) {
  login.value = storage;
  password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    localStorage.setItem("login", login.value);
  }
});
