// import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
// import Inputmask from '../node_modules/inputmask/dist/inputmask.es6.js';
import {el, setChildren} from 'redom';
import Inputmask from 'inputmask';

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
  type: 'text', maxlength: 25});

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

const im1 = new Inputmask('9999 9999 9999 9999');
const im2 = new Inputmask('99/99');
const im3 = new Inputmask('999');
im1.mask(numberInput);
im2.mask(dateInput);
im3.mask(cvvInput);

const showName = () => {
  if (!holderInput.value.trim()) {
    cardName.textContent = 'John Doe';
    return;
  }

  cardName.textContent = holderInput.value;
};

const showNumber = () => {
  cardNumber.textContent = numberInput.value;
};

const showDate = () => {
  cardDate.textContent = dateInput.value;
};

holderInput.addEventListener('input', showName);
numberInput.addEventListener('input', showNumber);
dateInput.addEventListener('input', showDate);


