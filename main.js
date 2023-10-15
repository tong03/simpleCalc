function addNum(a,b){
    return a + b;
}

function subtractNum(a,b){
    return a - b;
}

function multiplyNum(a,b){
    return a * b;
}

function divideNum(a,b){
    return a/b;
}

function operate(operator, a, b){
    console.log("Operate function was called...");
    let total = 0;
    if (operator == '+'){
        console.log("It's an addition...");
        total = addNum(a,b);
    }
    else if (operator == '-'){
        console.log("It's subtraction...")
        total = subtractNum(a,b);
    }
    else if (operator == '*'){
        console.log("It's multiplication...");
        total = multiplyNum(a,b);
    }
    else if (operator == '/'){
        console.log("It's division...")
        total = divideNum(a,b);
    }
    // see if total is a decimal > 8 digits, including 0 and dot
    if(String(total).length > 8){
        // Start rounding it to 8 decimals place
        let factor = Math.pow(10, 8);
        total = Math.round(total*factor)/factor;
    }

    return total;

    // still cannot account for large numbers with decimals, will run
    // off screen stil
}

let streamLine = '0';
let firstNum = 0;
let secondNum = 0;
let operator = "";

const display = document.querySelector('.display');
const clearAll = document.querySelector('.button1');

// Operators
const addB = document.querySelector('.button16');
const minusB = document.querySelector('.button12');
const multiplyB = document.querySelector('.button8');
const divideB = document.querySelector('.button4');
const equalB = document.querySelector('.button19');
const percentB = document.querySelector('.button3');
const decimalB = document.querySelector('.button18');
const signB = document.querySelector('.button2');

// Numbers
const num7 = document.querySelector('.button5');
const num8 = document.querySelector('.button6');
const num9 = document.querySelector('.button7');
const num4 = document.querySelector('.button9');
const num5 = document.querySelector('.button10');
const num6 = document.querySelector('.button11');
const num1 = document.querySelector('.button13');
const num2 = document.querySelector('.button14');
const num3 = document.querySelector('.button15');
const num0 = document.querySelector('.button17');

// Event Listeners for the Operation Buttons

signB.addEventListener('click', () => {
    // Do nothing if streamLine is 0
    if(streamLine == '0'){
        return;
    }
    // convert to float and multiply by -1
    streamLine = parseFloat(streamLine) * -1;
    // convert back to string to display on screen
    display.textContent = String(streamLine);
})

decimalB.addEventListener('click', () => {
    // Does not do anything if length already is at max
    if(streamLine.length >= 10){
        return;
    }
    // Does not do anything if there's already a decimal in the stream
    else if (String(streamLine).includes('.')){
        return;
    }
    // If pressed before an integer is on screen and there's only 0
    if(streamLine == '0'){
        streamLine += '.';
        display.textContent = streamLine;
        return;
    }
    // If pressed after an integer is on screen
    streamLine += '.';
    display.textContent = streamLine;
    // There is still float precision error when adding 1.63 + 0.47 
})

percentB.addEventListener('click', () => {
    currentNum = parseFloat(streamLine);
    pNum = currentNum / 100.0;
    console.log(pNum);
    streamLine = pNum;
    display.textContent = streamLine;
})

equalB.addEventListener('click', () => {
    if (operator == ""){
        return;
    }
    console.log("Current operator: " + operator);
    secondNum = parseFloat(streamLine);
    console.log("Second Num: " + secondNum);
    streamLine = operate(operator, firstNum, secondNum);
    console.log("Result is: " + streamLine);
    console.log("streamLine after an operation is a: " + typeof streamLine);
    display.textContent = streamLine;
}) 

addB.addEventListener('click', () => {
    operator = '+';
    firstNum = parseFloat(streamLine);
    console.log("First Num: " + firstNum);
    streamLine = "0";
})

minusB.addEventListener('click', () => {
    operator = '-';
    firstNum = parseFloat(streamLine);
    console.log("First Num: " + firstNum);
    streamLine = "0";
})

divideB.addEventListener('click', () => {
    operator = '/';
    firstNum = parseFloat(streamLine);
    console.log("First Num: " + firstNum);
    streamLine = "0";
})

multiplyB.addEventListener('click', () => {
    operator = '*';
    firstNum = parseFloat(streamLine);
    console.log('First Num: ' + firstNum);
    streamLine = "0";
})

// Clear screen
clearAll.addEventListener('click', () => {
    streamLine = '0';
    display.textContent = streamLine;
})

num0.addEventListener('click', () => {
    if(streamLine == '0'){
        display.textContent = streamLine;
    }
    else if(streamLine.length >= 10){
        return;
    }
    else{
        streamLine += "0";
        display.textContent = streamLine;
    }
})

num1.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    
    streamLine += "1";
    display.textContent = streamLine;
})

num2.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "2";
    display.textContent = streamLine;
})

num3.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "3";
    display.textContent = streamLine;
})

num4.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "4";
    display.textContent = streamLine;
})

num5.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "5";
    display.textContent = streamLine;
})

num6.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "6";
    display.textContent = streamLine;
})

num7.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "7";
    display.textContent = streamLine;
})

num8.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "8";
    display.textContent = streamLine;
})

num9.addEventListener('click', () => {
    if(streamLine.length >= 10){
        return;
    }
    else if (streamLine == '0'){
        streamLine = "";
    }
    streamLine += "9";
    display.textContent = streamLine;
})