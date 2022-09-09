/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*

1. Test basic button click to make sure it worked with event listener.
2. Need a click event for button
3. Need fuction that converts numbers
4. Take the number entered and convert it to meters/ft etc then display it in that box
Need to also clear the text field after convert button pressed

*/

const inputEl = document.getElementById("input-el") //text field where # can be entered
const inputBtn = document.getElementById("input-btn") //convert button
const firstOutput = document.getElementById("first_output")
const secondOutput = document.getElementById("second_output")
const thirdOutput = document.getElementById("third_output")


const meterToFeet =  3.2
const feetToMeter =  .30
const litersToGallons = 0.26
const gallonsToLiters = 3.7
const kilogramToPounds = 2.2
const poundsToKilograms = 0.45


inputBtn.addEventListener("click", function() {
    let baseValue =inputEl.value // takes input number
    firstOutput.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue * feetToMeter} meters` 
    secondOutput.textContent = `${baseValue} liters = ${baseValue * litersToGallons} gallons | ${baseValue} gallons = ${baseValue * gallonsToLiters} liters` 
    thirdOutput.textContent = `${baseValue} kg = ${baseValue * Math.round(kilogramToPounds)} pounds | ${baseValue} pounds = ${baseValue * (poundsToKilograms).toFixed(2)} kg` 
})

