// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('TEST01 adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('TEST02 adds -4 + 4 to equal 0', () => {
    let total = sum(-4, 4);
    expect(total).toBe(0);
})

test('TEST03 adds -4 - 8 to equal -12', () => {
    let total = sum(-4, -8);
    expect(total).toBe(-12);
})

test('TEST04 pasar Dolares a Yenes', () => {
    expect(fromDollarToYen(31.88)).toBe(4662.82);
})

test('TEST05 pasar Euros a Dolares', () => {
    expect(fromEuroToDollar(85.6)).toBe(91.59);
})

test('TEST06 pasar Yenes a Libras', () => {
    expect(fromYenToPound(1000)).toBe(5.56);
})