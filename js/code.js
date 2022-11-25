let inputValue = document.querySelector("#input")
let comma = true
let isEvaluated = false;

// Function for the input display
function display(number) {
    inputValue.value += number
    comma = true
    if(isEvaluated){
        isEvaluated = false;
        clr(inputValue);
    } 
}
function symbol(number) {
    inputValue.value += number
    comma = true
    if(isEvaluated){
        isEvaluated = false;
        clr(inputValue);
    } 
}

// Process to solve operation
function answer() {
    try{
        inputValue.value = eval(inputValue.value);
        isEvaluated =true;
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
    if(comma == true ){
        inputValue.value += number
        comma = false
    }
}

// Arrow function for comma
let toggleComma = () => {
    comma = true
}