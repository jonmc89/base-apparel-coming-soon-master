const formEl = document.getElementById('form');
const emailInputEl = document.getElementById('email');
const errorEl = document.getElementById('error');

emailInputEl.addEventListener('input', (event) => {
  if (email.validity.valid) {
    errorEl.textContent = '';
    errorEl.classList.remove('show-error');
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
  errorEl.classList.add('show-error');
}
