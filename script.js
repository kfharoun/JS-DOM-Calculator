// GOALS
// select numbers so that I can perform operations with them.
// add two numbers together
// subtract one number from another
// multiply two numbers together
// divide one number by another
// see the output of the operations
// be able to clear all operations




/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".number") 
const display = document.querySelector(".display")
const reload = document.querySelector(`.reset`)
const operations = document.querySelectorAll(`.opp`)
const equal = document.querySelector(`.equal`)



// console.log(numbersValue)

/*-------------------------------- Variables --------------------------------*/
let value = ""
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
       value += event.target.innerText
       showValue()
    })
  })

operations.forEach(op => {
    op.addEventListener("click", (event) => {
        value += event.target.innerText
        showValue()

    })
  })

reload.addEventListener(`click`, () => {
    reset()
    showValue()
})

equal.addEventListener("click", () => {
    calculation()
})
/*-------------------------------- Functions --------------------------------*/
function showValue(){
    display.innerText = value;
}

function reset(){
    value = ""
}

function calculation(){
    try {
        const result = eval(value)
        display.innerText = result
        value = result.toString()
    } catch (error){
        display.innerText = "error"
        value = ""
    }
}

// https://www.geeksforgeeks.org/javascript-eval-function/
//https://stackoverflow.com/questions/8403108/calling-eval-in-particular-context
// used chatgpt to find out why value = event.target.innerText wasnt working, changed it to +=

// make C clear x
// make - subtract 
// make + add
// make * multiply
// make value of click appear in display

    // functions we need to make
// a calculation function that strings the textinput x
// a function to make = work??????? ty eval x
// value function x
// opp function x
// clear function x
// function to have inner text show up in display x
