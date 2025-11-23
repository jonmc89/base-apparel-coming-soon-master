const formEl = document.getElementById("form");
const emailInputEl = document.getElementById("emailInput");
const errorIcnEl = document.getElementById("errorIcn");
const errorMessageEl = document.getElementById("errorMessage");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInputEl.value.trim();

    if (emailValue === "") {
        errorMessageEl.textContent = "Please enter your email address!";
        errorMessageEl.style.display = "block";
        errorIcnEl.style.display = "block";
        emailInputEl.classList.add("input-error");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        errorMessageEl.textContent = "Please enter a valid email address!";
        errorMessageEl.style.display = "block";
        errorIcnEl.style.display = "block";
        emailInputEl.classList.add("input-error");
        return;
    }

    errorMessageEl.style.display = "none";
    errorIcnEl.style.display = "none";
    emailInputEl.classList.remove("input-error");
    console.log("Form submitted with:", emailValue);
});
