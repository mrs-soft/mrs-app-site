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

// Скелетон для загрузки изображений

const homeFirstImage = document.getElementById("home-first-image");
const homeSecondImage = document.getElementById("home-second-image");
const mrsFirstImage = document.getElementById("mrs-first-image");
const mrsSecondImage = document.getElementById("mrs-second-image");

if (homeFirstImage) {
  homeFirstImage.onload = () => {
    homeFirstImage.classList.remove("skeleton");
  }
}

if (homeSecondImage) {
  homeSecondImage.onload = () => {
    homeSecondImage.classList.remove("skeleton");
  }
}

if (mrsFirstImage) {
  mrsFirstImage.onload = () => {
    mrsFirstImage.classList.remove("skeleton");
  }
}

if (mrsSecondImage) {
  mrsSecondImage.onload = () => {
    mrsSecondImage.classList.remove("skeleton");
  }
}

//Скролл для кнопок 

const btnFirstSection = document.getElementById("first-section-btn");
const btnIntegrationSection = document.getElementById("integration-section-btn");

btnFirstSection?.addEventListener("click", scrollFunction)
btnIntegrationSection?.addEventListener("click", scrollFunction)

function scrollFunction() {
  const element = document.querySelector(".price");
  element.scrollIntoView();
}



// function LoadImage(element, src, srcset) {
//   var img = new Image()

//   img.onload = function () {
//     element.src = img.src;
//     element.classList.remove("skeleton");
//     element.srcset = img.srcset;
//     element.alt = "first-image"
//   };

//   img.src = src
//   img.srcset = srcset
// }

// LoadImage(homeFirstImage, "/assets/img/mainPage/firstImg.png", "/assets/img/mainPage/firstImg382w.png 382w, /assets/img/mainPage/firstImg592w.png 592w, /assets/img/mainPage/firstImg.png 1200w")













