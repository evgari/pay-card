import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
import Inputmask from '../node_modules/inputmask/dist/inputmask.es6.js';

const wrapper = el('div', {className: 'wrapper'});
const card = el('div', {className: 'card'});

const creditCard = el('div', {className: 'credit-card'});
const cardNumber = el('span', {className: 'card__number',
  textContent: 'XXXX XXXX XXXX XXXX'});
const cardPersonal = el('div', {className: 'card__personal'});
const cardName = el('span', {className: 'card__name', textContent: 'John Doe'});
const cardDate = el('span', {className: 'card__date', textContent: '04/24'});

setChildren(cardPersonal, [cardName, cardDate]);
setChildren(creditCard, [cardNumber, cardPersonal]);

const form = el('form', {id: 'form', className: 'form'});
const holderField = el('div', {className:
  `form__input-wrap form__input-wrap_holder`});
const holderInput = el('input', {className: 'input input__holder',
  type: 'text'});

setChildren(holderField, el('label', {className: `form__label
  form__holder-label`, textContent: 'Card Holder'}), holderInput);

const numberField = el('div', {className:
  `form__input-wrap form__input-wrap_number`});
const numberInput = el('input', {className: 'input input__number',
  id: 'cardNumber'});

setChildren(numberField, el('label', {className: `form__label
  form__number-label`, textContent: 'Card Number'}), numberInput);

const dateField = el('div', {className:
  `form__input-wrap form__input-wrap_date`});
const dateInput = el('input', {className: 'input input__date',
  type: 'text'});

setChildren(dateField, el('label', {className: `form__label
  form__date-label`, textContent: 'Card Expiry'}), dateInput);

const cvvField = el('div', {className:
  `form__input-wrap form__input-wrap_cvv`});
const cvvInput = el('input', {className: 'input input__cvv',
  type: 'text'});

setChildren(cvvField, el('label', {className: `form__label
  form__cvv-label`, textContent: 'CVV'}), cvvInput);

const checkButton = el('button', {className: 'form__button',
  textContent: 'CHECK OUT'});

setChildren(form, holderField, numberField, dateField, cvvField, checkButton);

setChildren(card, [el('p', {className: 'secure',
  textContent: 'Secure Checkout'}), creditCard, form]);
setChildren(wrapper, card);
setChildren(document.body, wrapper);

const im = new Inputmask('9999 9999 9999 9999');
im.mask(numberInput);

const showName = () => {
  cardName.textContent = holderInput.value;
};

const showNumber = () => {
  cardNumber.textContent = numberInput.value;
};

const showDate = () => {
  cardDate.textContent = dateInput.value;
};

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);  
    }, delay);
  }
};

holderInput.addEventListener('input', debounce(showName, 300));
numberInput.addEventListener('input', showNumber);
dateInput.addEventListener('input', showDate);


