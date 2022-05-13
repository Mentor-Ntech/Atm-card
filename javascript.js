'use strict'
const atmCardBox = document.querySelector('.atmCardBox');
const overlay = document.querySelector('.overlay');
const flexBox = document.queryCommandValue('.flexBox');
const btnFull = document.querySelector('.btnFull')
const showPoint = document.querySelector('.showPoint')
const holderName = document.querySelector('.holderName')

btnFull.addEventListener('click', () =>{
    // console.log('click me')
    if (atmCardBox !==1) {

    }
})

function onWord (holderName) {
    return holderName.replaceAll(' ', '').toLowerCase();
}
function capFirstWord(holderName) {
    const [first, ...others] = holderName.split(' ');
    return [first.toUpperCase(), ...others].join()
}

function transform (string, transformerFn) {
    if (onWord === holderName) {
        console.log(`Original sentence❤ ${string}`);
    }else {
        console.log(`Transformd sentence💨 ${transformerFn(string)}`);
    }
    // console.log(`Original sentence❤ ${string}`);
    // console.log(`Transformd sentence💨 ${transformerFn(string)}`);
    // console.log(`function name: ${transformerFn.name}`)

}
transform('naheem', onWord)
transform('oloyede', capFirstWord)