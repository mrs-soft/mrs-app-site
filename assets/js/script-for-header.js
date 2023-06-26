// Бэкграунд хэдэра

const pageAbout = document.querySelector(".about");
const pagePrivacy = document.querySelector(".privacy");
const pageError = document.querySelector(".error");

const firstSection = document.querySelector(".first");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

const partnersSection = document.querySelector(".partners");

const newTitle = document.getElementsByTagName('h1')

const currentYear = new Date().getFullYear()
document.getElementById("year").innerText = currentYear

if (pageAbout || pagePrivacy || pageError) {
  header.style.backgroundColor = "#fff";
} else {
  header.style.backgroundColor = "";
}

// Боковое меню
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("simple-mobile-menu");

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

function isInViewport(element) {
  if (!element) return
  const rect = element.getBoundingClientRect();
  return rect.top >= -rect.height
}

//Динамический title и description

window.addEventListener(
  "load",
  () => {
    const metaTitle = firstSection?.querySelector('h1')?.innerText || pageAbout?.querySelector('h1')?.innerText || pagePrivacy?.querySelector('h1')?.innerText

    if (location.href.includes('platform')) {
      document.title = metaTitle
    } else if (partnersSection) {
      document.title = "МРС"
    } else document.title = newTitle[0]?.innerText

    if (firstSection?.querySelector('h6')?.innerText) {
      document.querySelector('meta[name="description"]').setAttribute("content", firstSection?.querySelector('h6')?.innerText);

      document.querySelector('meta[property="og:description"]').setAttribute("content", firstSection?.querySelector('h6')?.innerText);
    }

    document.querySelector('meta[property="og:title"]').setAttribute("content", metaTitle);
    document.querySelector('meta[property="og:url"]').setAttribute("content", location.href);

  }
);

// window.addEventListener("DOMContentLoaded", function () {
//   let url_view = window.location.href;
//   const url_path = window.location.pathname;
//   const url_hash = window.location.hash;
//   if (url_path.endsWith("/") || url_hash.endsWith("/")) {
//     //Skip Home Page
//     if (url_path !== "/") {
//       url_view = url_view.slice(0, -1);
//       window.location.replace(url_view);
//     }
//   }
// });



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








