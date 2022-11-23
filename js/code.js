let inputValue = document.querySelector("#input")

// Function for the input display
function display(number) {
    inputValue.value += number
    return number
}

// process to solve operation
function answer() {
    inputValue.value = eval(inputValue.value)
}

// clearing the screen
function clr() {
    inputValue.value = " "
}

// delete
function dlt() {
    inputValue.value = inputValue.value.slice(0, -1)
}