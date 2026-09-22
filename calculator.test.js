const { add, multiply } = require('./calculator');

test('adds 2 + 3 correctly', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplies 4 × 5 correctly', () => {
    expect(multiply(4, 5)).toBe(20);
});

