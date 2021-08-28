"use strict";

window.addEventListener("DOMContentLoaded", settingUp);
let imputfield1 = document.querySelector("#firstnumber").value;
let firstnumber;
let secondnumber;
let operator = document.querySelector("#operator").value
let checkbox = document.querySelector("#doround");
let result;
let resultrounded;

document.querySelector("#clear").addEventListener("click", clearResults)

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
        result = firstnumber + secondnumber
        console.log (result)
    }

    else if (operator === "sub") {
        result = firstnumber - secondnumber
        console.log (result)
    }

    else if (operator === "mul") {
        result = firstnumber * secondnumber
        console.log (result)
    }

    else {
        result = firstnumber / secondnumber
        console.log (result)
    }

    checkIfRounding()
}

/* maybe something here: https://www.techiedelight.com/determine-checkbox-checked-javascript/ */
function checkIfRounding() {
if (checkbox.checked == true) {
    console.log("rounding yes");
    let decimals = document.querySelector("#decimals").value
    /* reference https://javascript.info/number#rounding */
    if (decimals == 0) {
        resultrounded = Math.round(result)
        console.log(resultrounded)
    }
    else if (decimals == 1) {
        resultrounded = result.toFixed(1)
        console.log(resultrounded)
    }
    else if (decimals == 2) {
        resultrounded = result.toFixed(2)
        console.log(resultrounded)
    }
    else if (decimals == 3) {
        resultrounded = result.toFixed(3)
        console.log(resultrounded)
    }
    else if (decimals == 4) {
        resultrounded = result.toFixed(4)
        console.log(resultrounded)
    }
    else if (decimals == 5) {
        resultrounded = result.toFixed(5)
        console.log(resultrounded)
    }
    else if (decimals == 6) {
        resultrounded = result.toFixed(6)
        console.log(resultrounded)
    }
    else if (decimals == 7) {
        resultrounded = result.toFixed(7)
        console.log(resultrounded)
    }
    else {
        resultrounded = result.toFixed(8)
        console.log(resultrounded)
    }
    let viewresult = document.createElement("li")
document.querySelector("#results").appendChild(viewresult);
viewresult.append(resultrounded)
/*populate first result field*/
document.querySelector("input[id=firstnumber]").value = resultrounded;
/* clean imput fields */
document.querySelector("input[id=secondnumber]").value = "";
}
/* inserting result at the bottom of the list https://developer.mozilla.org/en-US/docs/Web/API/Element/after */


else  {
    console.log("rounding no")
let viewresult = document.createElement("li")
document.querySelector("#results").appendChild(viewresult);
viewresult.append(result)
/*populate first result field*/
document.querySelector("input[id=firstnumber]").value = result;
/* clean imput fields */
document.querySelector("input[id=secondnumber]").value = "";

}
}

function clearResults () {
    console.log("clearing")
    document.querySelector("input[id=firstnumber]").value = "";
    document.querySelector("input[id=secondnumber]").value = "";
    document.querySelector("#results").innerHTML = '';}