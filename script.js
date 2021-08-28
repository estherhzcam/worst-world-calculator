"use strict";

window.addEventListener("DOMContentLoaded", settingUp);
let firstnumber = document.querySelector("#firstnumber").value
let secondnumber = document.querySelector("#firstnumber").value
let operator = document.querySelector("#operator").value
let checkbox = document.querySelector("#doround")

function settingUp() {

    document.querySelector("#calculate").addEventListener("click", readFirstNumber)
}

function readFirstNumber() {

    firstnumber = Number(document.querySelector("#firstnumber").value);
    readSecondNumber()
}

function readSecondNumber() {

    secondnumber = Number(document.querySelector("#secondnumber").value);
    readOperator()
}

function readOperator() {

    operator = document.querySelector("#operator").value
    if (operator === "add") {
        let result = firstnumber + secondnumber
        console.log (result)
    }

    else if (operator === "sub") {
        let result = firstnumber - secondnumber
        console.log (result)
    }

    else if (operator === "mul") {
        let result = firstnumber * secondnumber
        console.log (result)
    }

    else {
        let result = firstnumber / secondnumber
        console.log (result)
    }

    checkIfRounding()
}

/* maybe something here: https://www.techiedelight.com/determine-checkbox-checked-javascript/ */
function checkIfRounding() {
console.log ("checking rounding stuff")

if (checkbox.checked == true) {
    console.log("rounding yes")
}

else  {
    console.log("rounding no")
}
}