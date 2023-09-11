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
    if (operator == '+'){
        addNum(a,b);
    }
    else if (operator == '-'){
        subtractNum(a,b);
    }
    else if (operator == '*'){
        multiplyNum(a,b);
    }
    else if (operator == '/'){
        divideNum(a,b);
    }
}

console.log(addNum(2,7));
console.log(subtractNum(10,7));
console.log(multiplyNum(2,7));
console.log(divideNum(24,3));

let streamLine = "";

const display = document.querySelector('.display');
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

num7.addEventListener('click', () => {
    streamLine += "7";
    display.textContent = streamLine;
})

num8.addEventListener('click', () => {
    streamLine += "8";
    display.textContent = streamLine;
})

num9.addEventListener('click', () => {
    streamLine += "9";
    display.textContent = streamLine;
})

num4.addEventListener('click', () => {
    streamLine += "4";
    display.textContent = streamLine;
})

num5.addEventListener('click', () => {
    streamLine += "5";
    display.textContent = streamLine;
})

num6.addEventListener('click', () => {
    streamLine += "6";
    display.textContent = streamLine;
})

num1.addEventListener('click', () => {
    streamLine += "1";
    display.textContent = streamLine;
})

num2.addEventListener('click', () => {
    streamLine += "2";
    display.textContent = streamLine;
})

num3.addEventListener('click', () => {
    streamLine += "3";
    display.textContent = streamLine;
})

num0.addEventListener('click', () => {
    if(display.textContent == '0'){
        display.textContent = display.textContent;
    }
    else{
        streamLine += "0";
        display.textContent = streamLine;
    }
})