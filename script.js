const formEl = document.getElementById('form');
const emailInputEl = document.getElementById('email');
const errorEl = document.getElementById('error');
const errorIconEl = document.getElementById('errorIcon');

emailInputEl.addEventListener('input', (event) => {
  if (emailInputEl.validity.valid) {
    errorEl.textContent = '';
    errorEl.classList.remove('show-error');
    errorIconEl.classList.remove('show-error-icon');
    emailInputEl.classList.remove('input-error-outline');
    emailInputEl.setAttribute('aria-invalid', 'false');
  } else {
    showError();
  }
});

formEl.addEventListener('submit', (event) => {
  if (!emailInputEl.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (emailInputEl.validity.valueMissing) {
    errorEl.textContent = 'Please provide a valid email';
  } else if (emailInputEl.validity.typeMismatch) {
    errorEl.textContent = 'Please provide a valid email';
  }
  errorEl.hidden = false;
  errorEl.classList.add('show-error');
  errorIconEl.classList.add('show-error-icon');
  errorIconEl.hidden = false;
  emailInputEl.classList.add('input-error-outline');
  emailInputEl.setAttribute('aria-invalid', 'true');
}
