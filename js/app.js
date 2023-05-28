'use strict';

const billEl = document.getElementById('bill-input');
const peopleEl = document.getElementById('people-input');
const tipPerPersonEl = document.getElementById('tip-person');
const totalAmountEl = document.getElementById('tip-total');
const reset = document.getElementById('reset');
const customTip = document.getElementById('custom');
const tipButtons = document.querySelectorAll('.btn');
const errorMsg = document.querySelector('.error-msg');

let bill, people, totalAmount, tipPerPerson, tipPercent, tipAmount;

function init() {
  (bill = 0), (people = 1), (totalAmount = 0), (tipPerPerson = 0);
  tipPercent = 5;
  billEl.placeholder = bill;
  peopleEl.placeholder = people;
  tipPerPersonEl.textContent = tipPerPerson;
  totalAmountEl.textContent = totalAmount;
}

init();

reset.addEventListener('click', init);

billEl.addEventListener('keyup', () => {
  bill = Number(billEl.value);

  calcTip();
});

peopleEl.addEventListener('keyup', () => {
  people = Number(peopleEl.value);

  calcTip();
});

function calcTip() {
  if (people === '' || people <= 0) {
    errorMsg.classList.remove('hidden');
    peopleEl.style.border = '1px solid rgb(248,113,113)';
    people = 1;
  } else {
    errorMsg.classList.add('hidden');
    peopleEl.style.border = 'none';
    tipAmount = (bill * tipPercent) / 100;
    tipPerPerson = tipAmount / people;
    totalAmount = (tipAmount + bill) / people;
  }

  tipPerPersonEl.textContent = tipPerPerson.toFixed(2);
  totalAmountEl.textContent = totalAmount.toFixed(2);
}

tipButtons.forEach(btn =>
  btn.addEventListener('click', e => {
    tipPercent = Number(e.target.id);
    calcTip();
  })
);

customTip.addEventListener('keyup', () => {
  tipPercent = Number(customTip.value);
  calcTip();
});
