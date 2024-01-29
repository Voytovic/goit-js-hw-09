
const KEY = 'feedback-form-state';

let previousData = {};

const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', onFormInput);
formElem.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = formElem.elements.email.value.trim();
  const message = formElem.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  saveToLocalStorage(KEY, data);
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = formElem.elements.email.value.trim();
  const message = formElem.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email,
    message,
  };

  localStorage.removeItem(KEY);
  formElem.reset();

  console.log(data);
}

function saveToLocalStorage(key, value) {
  const jsonItem = JSON.stringify(value);
  localStorage.setItem(key, jsonItem);
}

function getFromLocalStorage(key) {
  const parseItem = localStorage.getItem(key);
  try {
    return JSON.parse(parseItem);
  } catch {
    return parseItem;
  }
}

function dataInput() {
  const data = getFromLocalStorage(KEY) || {};
  formElem.elements.email.value = data.email || '';
  formElem.elements.message.value = data.message || '';
}

dataInput();