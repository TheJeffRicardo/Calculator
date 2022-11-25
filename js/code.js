let inputValue = document.querySelector("#input")
let comma = true

// Function for the input display
function display(number) {
    inputValue.value += number
    comma = true
}
function symbol(number) {
    inputValue.value += number
    comma = true
}

// Process to solve operation
function answer() {
    try{
        inputValue.value = eval(inputValue.value)
    }
    catch(err){
        inputValue.value = 'Error!!!'
    }
}

// Clearing the screen
function clr() {
    inputValue.value = inputValue.value.slice(0, 0)
}

// Delete
function dlt() {
    inputValue.value = inputValue.value.slice(0, -1)
}

// Display comma
function displayComma(number){
    if(comma == true){
        inputValue.value += number
        comma = false
    }
}

// Arrow function for comma
let toggleComma = () => {
    comma = true
}