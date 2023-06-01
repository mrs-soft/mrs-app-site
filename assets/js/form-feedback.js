const feedbackForm = document.getElementById("form-feedback");

const nameInput = document.getElementById("feedback-name");
const nameErrorInput = document.getElementById("feedback-name-error");

const phoneInput = document.getElementById("feedback-telephone");
const phoneErrorInput = document.getElementById("feedback-telephone-error");

const emailInput = document.getElementById("feedback-email");
const emailErrorInput = document.getElementById("feedback-email-error");

const checkboxInput = document.getElementById("feedback-checkbox");

const btnFirstSection = document.getElementById("first-section-btn");
const btnIntegrationSection = document.getElementById("integration-section-btn");

// const formMessageEl = document.querySelector(".feedback-form-message");
// const formMessageTextEl = document.querySelector(".feedback-form-message__text");

btnFirstSection.addEventListener("click", scrollFunction)
btnIntegrationSection.addEventListener("click", scrollFunction)

const feedbackSubmit = document.getElementById("feedback-submit");

const formInputs = document.querySelectorAll(".feedback-form__input");

//on change input
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("change", validateForm);

}

// nameInput.addEventListener("change", validateName);
// emailInput.addEventListener("change", validateEmail);
// phoneInput.addEventListener("change", validatePhone);

feedbackSubmit.setAttribute('disabled', '');

feedbackForm?.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!validateForm()) return

  const payload = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value
  };

  feedbackSubmit.disabled = true;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await sendMail(payload);

  feedbackSubmit.disabled = false;

  let textSuccess = "";
  let textError = "";


  textSuccess = "Спасибо за заявку! \n Ваши данные успешно отправлены";
  textError = "Не получилось отправить заявку. \n Попробуйте еще раз.";


  if (res.status === 200) {
    // formMessageTextEl.innerText = textSuccess;
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    checkboxInput.checked = false;

    feedbackSubmit.disabled = true;
  } else {
    // formMessageTextEl.innerText = textError;
  }

  // formMessageEl.style.display = "flex";
});

function sendMail(payload) {
  const api = "";

  var data = {
    template_params: payload,
  };


  return (
    { status: 200 }
    // fetch(api, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   // .then((res) => res.json())
    //   .then((data) => {
    //     return data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   })
  );
}

function validateForm() {
  if (nameInput.value !== "" && phoneInput.value.length > 8 && validateEmail(emailInput.value) && checkboxInput.checked) {
    feedbackSubmit.disabled = false;
    return true
  } else {
    return false
  }
}

function validateEmail() {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)

  // if (!isValid) {
  //   emailErrorInput.style.display = "flex";
  // } else emailErrorInput.style.display = "none";

  return isValid
}

function validateName() {
  const isValid = nameInput.value !== ""

  if (!isValid) {
    nameErrorInput.style.display = "flex";
  } else nameErrorInput.style.display = "none";

  return isValid
}

function validatePhone() {
  phoneInput.value = phoneInput.value.replace(/[^0-9-]/g, '')
}

function scrollFunction() {
  const element = document.querySelector(".price");
  element.scrollIntoView();
}