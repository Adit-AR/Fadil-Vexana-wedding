const home = document.querySelector(".home button");
let packaging = document.querySelector(".packaging");
let nama = document.querySelector(".people-name");

let inableScroll = function () {
  packaging.classList.add("muncul");
};

let scrol = function () {
  home.addEventListener("click", function () {
    packaging.classList.remove("muncul");
    let isi = prompt("masukkan nama sesuai yang di kririm melalui Whats up");
    nama.innerHTML = isi;
    localStorage.setItem("opened", "true");
  });
};
scrol();

if (!localStorage.getItem("opened")) {
  inableScroll();
}
