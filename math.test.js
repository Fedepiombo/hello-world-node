const math = require('./math');

test('somma 2 + 2 per dare 4', () => {
    expect(math.sum(2, 2)).toBe(4);
});

test('sottrae 5 - 3 per dare 2', () => {
    expect(math.diff(5, 3)).toBe(2);
});

function sum(a, b) { return a - b; } // Errore intenzionale!
