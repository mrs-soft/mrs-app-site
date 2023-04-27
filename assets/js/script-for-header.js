const pageAbout = document.querySelector(".about");
const pagePrivacy = document.querySelector(".privacy");
const pageError = document.querySelector(".error");

const header = document.querySelector(".header");

if (pageAbout || pagePrivacy || pageError) {
  header.style.backgroundColor = "#fff";
} else {
  header.style.backgroundColor = "";
}