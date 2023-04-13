let icon = document.querySelector(".icon");
let options = document.querySelector(".options");
let color = document.querySelector(".color");
let colors = document.querySelectorAll(".color li");
let fontSizem = document.querySelector(".font-size input");
let root = document.querySelector(":root");
let myfonts = document.querySelectorAll(".myfonts li");

icon.addEventListener("click", function () {
  if (options.style.display === "block") {
    options.style.display = "none";
    icon.style.left = "0px";
  } else {
    options.style.display = "block";
    icon.style.left = "150px";
  }
});

color.children[0].style.backgroundColor = "#00ced1";
color.children[1].style.backgroundColor = "#5ac18e";
color.children[2].style.backgroundColor = "#f7347a";
color.children[3].style.backgroundColor = "#003366";
color.children[4].style.backgroundColor = "#2196F3";
color.children[5].style.backgroundColor = "#ff00ff";

// Colors

if (window.localStorage.getItem("color")) {
  root.style.setProperty("--main-color", `${localStorage.getItem("color")}`);
  colors.forEach(function (li) {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

colors.forEach(function (li) {
  li.addEventListener("click", function (e) {
    colors.forEach(function (li) {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", `${li.getAttribute("data-color")}`);
    root.style.setProperty("--main-color", `${localStorage.color}`);
  });
});

// Font Size

if (window.localStorage.getItem("fontSize")) {
  root.style.setProperty("--main-font-size", `${localStorage.fontSize}`);
}
fontSizem.addEventListener("click", function () {
  window.localStorage.setItem("fontSize", `${fontSizem.value}px`);
  root.style.setProperty(
    "--main-font-size",
    `${localStorage.getItem("fontSize")}`
  );
});
fontSizem.addEventListener("focus", function () {
  fontSizem.style.opacity = "1";
});

// Fonts

if (window.localStorage.getItem("fonts")) {
  document.body.style.setProperty("font-family", `${localStorage.fonts}`);
  myfonts.forEach(function (li) {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-font="${window.localStorage.getItem("fonts")}"]`)
    .classList.add("active");
}

myfonts.forEach(function (li) {
  li.addEventListener("click", function (e) {
    myfonts.forEach(function (li) {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("fonts", `${li.getAttribute("data-font")}`);
    document.body.style.setProperty(
      "font-family",
      `'${localStorage.fonts}', sans-serif`
    );
  });
});

// show search

const iconSearch = document.querySelector(".icon-search");

iconSearch.addEventListener("click", function () {
  const input = document.querySelector(".form input");

  document.querySelector(".form").classList.toggle("search");
  input.classList.toggle("input-sr");
  input.focus();
});

// The menu

const menu = document.querySelector(".toggle-menu");

menu.addEventListener("click", function () {
  document.querySelector("header nav ul").classList.toggle("open");
});

// Slider
const landing = document.querySelector(".landing");
const rightArrow = document.querySelector(".move-right");
const leftArrow = document.querySelector(".move-left");
const bullets = document.querySelectorAll(".bullets li");
const text1 = document.querySelector(".landing .text-1");

window.onload = function () {
  text1.classList.add("come-1");
};

// Auto Slider
setInterval(() => {
  var index = +landing.getAttribute("data-slider") + 1;

  index = index < 4 ? index : 1;

  changeBack(index);
  content(index);
  bulletActive(index);
  landing.setAttribute("data-slider", index);
}, 5000);

// move slider with bullets
bullets.forEach(function (bul) {
  bul.addEventListener("click", function (e) {
    var index = e.currentTarget.getAttribute("data-bullet");

    bulletActive(index);
    changeBack(index);
    content(index);
  });
});

// move slider width arrows
rightArrow.addEventListener("click", function () {
  var index = +landing.getAttribute("data-slider") + 1;
  index = index < 4 ? index : 1;

  changeBack(index);
  content(index);
  bulletActive(index);
  landing.setAttribute("data-slider", index);
});

leftArrow.addEventListener("click", function () {
  var index = +landing.getAttribute("data-slider") - 1;
  index = index < 1 ? 3 : index;

  changeBack(index);
  content(index);
  bulletActive(index);
  landing.setAttribute("data-slider", index);
});

// change the background
function changeBack(index) {
  // landing.style.backgroundImage = `url(../images/landing-${index}.jpg)`;
}

// select the active bullet
function bulletActive(index) {
  bullets.forEach(function (bul) {
    bul.classList.remove("active");
  });
  document
    .querySelector(`.bullets [data-bullet="${index}"]`)
    .classList.add("active");
}

// Content by index
function content(index) {
  const text2 = document.querySelector(".landing .text-2");
  const text3 = document.querySelector(".landing .text-3");
  if (+index === 1) {
    text2.classList.remove("come-2");
    text3.classList.remove("come-3");
    text1.classList.add("come-1");
  }
  if (+index === 2) {
    text1.classList.remove("come-1");
    text3.classList.remove("come-3");
    text2.classList.add("come-2");
  }
  if (+index === 3) {
    text1.classList.remove("come-1");
    text2.classList.remove("come-2");
    text3.classList.add("come-3");
  }
}
