// Global variable
let display = document.getElementById("display");

// Calculate the answer
let findAns = () => {
    let value = document.getElementById("display").value;
    return eval(value);
};

// Show numbers into display
let numbers = document.querySelectorAll("#number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        display.value += numbers[i].value;
    });
}

// Show operators into display
let operators = document.querySelectorAll("#operator");
let isOperator = "";
let opArr = ["+", "-", "*", "/", "="];
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        isOperator = display.value.charAt(display.value.length - 1);
        if (opArr.includes(isOperator)) {
            if (operators[i].value == "=") {
                return 0;
            }
            display.value = display.value.slice(0, -1) + operators[i].value;
            return 0;
        }
        if (operators[i].value == "=") {
            document.getElementById("display").value = findAns();
            return 0;
        }
        display.value += operators[i].value;
    });
}

// Show number on click of keyboard
let keyArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "Enter"];
document.addEventListener("keydown", (v) => {
    keyArr.map((key) => {
        if (key == v.key) {
            isOperator = display.value.charAt(display.value.length - 1);
            if(opArr.includes(isOperator)){
                if (v.key == "=" || v.key == "Enter") {
                    return 0;
                    display.value = findAns();
                } else {
                    display.value += v.key;
                }
            }
        }
    });
});

// Clear data on clear key
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.value = "";
});
