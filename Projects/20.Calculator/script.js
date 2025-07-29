let display = document.getElementById("display");

function appendVal(value) {
  display.value += value;
}

function clearDisplay(){
    display.value = ""
}

function displayResult(){
    display.value = eval(display.value)
}