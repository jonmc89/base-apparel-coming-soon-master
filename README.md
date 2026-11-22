# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

#### Desktop Preview

![](./solution%20screenshots/Desktop%20Preview.png)

#### Mobile Device Preview

<div style="display: flex; justify-content: space-between;">
<img src="./solution screenshots/Tablet Preview.png" style="width: 400px; height: auto;"/>
<img src="./solution screenshots/Mobile Preview.png" style="width: 300px; height: auto;"/>
</div>

### Links

- Live Site URL: [Base Apparel Demo](https://jonmc89.github.io/base-apparel-coming-soon-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned another method of client side form validation using the Constraint Validation API, I felt it has made it much easier to write and understand.

```js
const formEl = document.getElementById('form');
const emailInputEl = document.getElementById('email');
const errorEl = document.getElementById('error');
const errorIconEl = document.getElementById('errorIcon');

emailInputEl.addEventListener('input', (event) => {
  if (email.validity.valid) {
    errorEl.textContent = '';
    errorEl.classList.remove('show-error');
    errorIconEl.classList.remove('show-error-icon');
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
  errorIconEl.classList.add('show-error-icon');
  emailInputEl.classList.add('input-error-outline');
}
```

### Continued development

N/A

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This helped me for client side form validation.

### AI Collaboration

I have used the Agent within VS Code, to assist with trouble shooting some of the unexpected issues I cam across when building this page.

## Author

- Website - [JMWebDev](https://www.jonmckenziewebdev.co.uk)
- Frontend Mentor - [@jonmc89](https://www.frontendmentor.io/profile/jonmc89)
- GitHub - [@jonmc89](https://github.com/jonmc89)

## Acknowledgments

N/A
