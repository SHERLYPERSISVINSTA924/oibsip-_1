let currentInput = '0';

function clearScreen() {
    currentInput = '0';
    updateScreen();
}

function appendToScreen(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateScreen();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateScreen();
}

function updateScreen() {
    document.getElementById('output').innerText = currentInput;
}
