const n = document.getElementById("input");
// enters the numbers we see
function button(input) {
    n.value += input; 
    // this add numbers and operator to the display above 
}

function inputClear() {
    n.value = "";
    // make the function of thr n-value to an empty string
}

function calculate() {
    n.value = eval(n.value)
    // this function calculates the numbers and operators
}
