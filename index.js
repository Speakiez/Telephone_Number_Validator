const inputElement = document.getElementById("input");
const outputContainer = document.querySelector(".right-side");
const checkButton = document.querySelector(".check-button");
const clearButton = document.querySelector(".clear-button");

const numRegex = /^(?:1|1 )?(?:\d\d\d|\(\d\d\d\))[\- ]?\d\d\d[\- ]?\d\d\d\d$/;
let userInputs = [];

const validateUserInput = (userInput) => {
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (numRegex.test(userInput)) {
        userInputs.push({
            isValid: "valid",
            text: userInput
        });
    } else {
        userInputs.push({
            isValid: "invalid",
            text: userInput
        });
    }

    updateDisplay(userInputs.at(-1));
    inputElement.value = "";
}

const updateDisplay = (outputObj) => {
    if (!outputObj) {
        outputContainer.replaceChildren();
        return;
    }
    
    const outputElem = document.createElement("div");
    outputElem.id = userInputs.indexOf(outputObj);

    if (outputObj.isValid === "valid") {
        outputElem.classList = `output ${outputObj.isValid}`;
        outputElem.textContent = `Valid US number: ${outputObj.text}`;
    } else {
        outputElem.classList = `output ${outputObj.isValid}`;
        outputElem.textContent = `Invalid US number: ${outputObj.text}`;
    }

    outputContainer.appendChild(outputElem);
}

checkButton.addEventListener("click", () => {
    validateUserInput(inputElement.value);
});

clearButton.addEventListener("click", () => {
    userInputs = [];
    updateDisplay();
});

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateUserInput(inputElement.value);
    }
});
