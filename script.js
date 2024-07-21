const home = document.querySelector(".home button");
let packaging = document.querySelector(".packaging");
let nama = document.querySelector(".people-name");
let undangan = ["fian", "azam", "fahmi", "ivan", "syharul"];
let pr = "";

let prm = function () {
  pr = prompt("masukkan nama sesuai dengan undangan di WA");
  return pr;
};

let inableScroll = function () {
  packaging.classList.add("muncul");
};

let scrol = function () {
  home.addEventListener("click", function () {
    prm();
    nama.innerHTML = pr;
    check();
  });
};
scrol();

let check = function () {
  for (let i = 0; i <= undangan.length; i++) {
    if ((pr == undangan[i]) == true) {
      packaging.classList.remove("muncul");
      localStorage.setItem("opened", "true");
      console.log(i);
      return pr;
    } else {
      alert(
        "Nama yang anda masukkan tidak ada dalam daftar undangan, pastikan sudah memasukkan nama sesuai yang di kirim di WA"
      );
      return pr;
    }
  }
};

if (!localStorage.getItem("opened")) {
  inableScroll();
}
