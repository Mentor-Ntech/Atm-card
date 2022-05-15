'use strict'
const firstNameValue = document.getElementById('firstname');
const lastNameValue = document.getElementById('lastname');
const accountTypeValue = document.getElementById('account-type')
const submitBtn = document.getElementById('submit');

const accountTypeText = document.querySelector('.account-type');
const cardDigit =document.querySelector('.cardDigit');
const expiry = document.querySelector('.expiry-date');
const firstNameText = document.querySelector('.firstname');
const lastNameText = document.querySelector('.lastname');

const atmProxy = document.querySelector('.atm-proxy');
const atmCard = document.querySelector('.atmCardBox');

// console.log(firstNameValue,lastNameValue,accountTypeValue,submitBtn)
// console.log(firstNameText,cardDigit,expiry,lastNameText,accountTypeText)

// FUNCTION
const getCardDigit = () => {
    const randomNum = Math.trunc(Math.random() * 10000000000000000) + '';
    const lastFour = randomNum.slice(-4);
    const padNum = lastFour.padStart(randomNum.length, '*');
    return padNum;
} 

const genExpDate = () => {
    const d = new Date();
    const month = d.getMonth() +1
    const fixedMonth = month < 10 ? '0' + month : month;
    const year = (d.getFullYear() + 3) + '';
    return `${fixedMonth}/${year.slice(-2)}`
}


const getFirstName = (nameStr) => {
    const[firstXter, ...otherXter] = nameStr
    return [firstXter.toUpperCase(), ...otherXter].join('')
}
const getLastName = (nameStr) => {
    return nameStr.toUpperCase();
}


submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('submit button')

    //Display Account Type
accountTypeText.textContent = accountTypeValue.value

  // Display Card number
cardDigit.textContent = getCardDigit();

  //Display Firstname
firstNameText.textContent = getFirstName(firstNameValue.value)

 // Display Lastname
lastNameText.textContent = getLastName(lastNameValue.value)

  //Display Expiry Date
expiry.textContent = genExpDate();

 //Display Atm card
atmCard.classList.remove('hidden');
atmProxy.classList.add('hidden')


})