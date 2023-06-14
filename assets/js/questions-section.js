const acc = document.querySelectorAll(".questions__content__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

      this.querySelector('.open').style.display = "block"
      this.querySelector('.close').style.display = "none"
    } else {
      panel.style.maxHeight = panel.scrollHeight + 50 + "px";

      this.querySelector('.open').style.display = "none"
      this.querySelector('.close').style.display = "block"
    }
  });
}