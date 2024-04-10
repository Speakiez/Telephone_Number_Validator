const inputElement = document.getElementById("input");
const checkButton = document.querySelector(".check-button");
const clearButton = document.querySelector(".clear-button");

const numRegex = /^(?:1|1 )?(?:\d\d\d|\(\d\d\d\))[\- ]?\d\d\d[\- ]?\d\d\d\d$/;
const userInputs = [];


const validateUserInput = (userInput) => {
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (numRegex.test(userInput)) {
        userInputs.push({
            isValid: true,
            text: userInput
        });
    } else {
        userInputs.push({
            isValid: false,
            text: userInput
        });
    }

    updateDisplay();
    inputElement.value = "";
}

const updateDisplay = () => {
    
}

checkButton.addEventListener("click", () => {
    validateUserInput(inputElement.value);
});

clearButton.addEventListener("click", () => {
    console.log("Clear");
});

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateUserInput(inputElement.value);
    }
});
