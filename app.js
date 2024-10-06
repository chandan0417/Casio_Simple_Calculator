const display = document.getElementById("display")
let isNewInput=true
let isResultDisplayed=false
function AppendToDisplay(input) {
    if (isResultDisplayed) {
        // If a result is being displayed and a new input comes in, reset the display
        display.value = input; 
        isResultDisplayed = false;  // Reset the result flag
    } 
    else if (isNewInput) {
        display.value = input;
        isNewInput = false;
    } 
    else {
        display.value += input;  // Append the new input
    }
}

document.getElementById("clear").addEventListener("click",ClearADigit)

function ClearADigit() {
    console.log("clear button clicked")
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}


function calculate(){
    try {
        
        display.value=eval(display.value);
        isNewInput=true
        isResultDisplayed=false
    } catch (error) {
        
        display.value="Error"
        
    }
}
function ClearDisplay() {
    document.getElementById("display").value = "";
    isNewInput = true;
    isResultDisplayed = false;

}