function sum(a, b) { return a + b; }
function diff(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) throw new Error("Impossibile dividere per zero");
    return a / b;
}

// Esportiamo le funzioni per poterle testare
module.exports = { sum, diff, multiply, divide };
