// Бэкграунд хэдэра

const pageAbout = document.querySelector(".about");
const pagePrivacy = document.querySelector(".privacy");
const pageError = document.querySelector(".error");

const firstSection = document.querySelector(".first");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

if (pageAbout || pagePrivacy || pageError) {
  header.style.backgroundColor = "#fff";
} else {
  header.style.backgroundColor = "";
}

// Боковое меню
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open mobile menu
burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("active");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
});

//close mobile menu
document.getElementById("mobile-menu__close").addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target !== mobileMenu) {
    mobileMenu.classList.remove("active");
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
});

document.addEventListener("scroll", () => {
  document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);

  if (!isInViewport(firstSection)) {
    header.style.backgroundColor = '#FFFF'
  } else {
    header.style.backgroundColor = ''
  }


  if (document.documentElement?.scrollTop > 1) {
    header?.classList.add('header__fixed');
  } else {
    header?.classList.remove('header__fixed');
  }

});

//Выделение ссылок

// const headerLink = document.querySelectorAll(".header-link");
// let j

// for (j = 0; j < headerLink.length; j++) {
//   if (window.location.href === headerLink[j]?.href) {
//     headerLink[j]?.classList.add("orange_color")
//   } else {
//     headerLink[j]?.classList.remove("orange_color")
//   }

// }

function isInViewport(element) {
  if (!element) return
  const rect = element.getBoundingClientRect();
  return rect.top >= -rect.height
}






