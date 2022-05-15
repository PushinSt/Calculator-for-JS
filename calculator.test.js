let calculator = require('./parse');
let input = require('./script');

test('Test add', () => {
     expect(calculator.calculation('13+5')).toBe(18);
     expect(calculator.calculation('0+10')).toBe(10);
     expect(calculator.calculation('10+0')).toBe(10);
     expect(calculator.calculation('10+2+5')).toBe(17);
     expect(calculator.calculation('10+(2+5)')).toBe(17);
     expect(calculator.calculation('(10+(2+5))')).toBe(17);

     expect(calculator.calculation('(10+(2+5)')).toBe(undefined);
});


test('Test sub', () => {
     expect(calculator.calculation('13-5')).toBe(8);
     expect(calculator.calculation('0-10')).toBe(-10);
     expect(calculator.calculation('10-0')).toBe(10);
     expect(calculator.calculation('10+2-5')).toBe(7);
     expect(calculator.calculation('10+-2')).toBe(8);
     expect(calculator.calculation('10+(2-5)')).toBe(7);
     expect(calculator.calculation('(10-(2+5))')).toBe(3);
     expect(calculator.calculation('(10-(2-5))')).toBe(13);

     expect(calculator.calculation('(10-(2+5)')).toBe(undefined);
});

test('Test mul', () => {
     expect(calculator.calculation('3*5')).toBe(3 * 5);
     expect(calculator.calculation('0*10')).toBe(0 * 10);
     expect(calculator.calculation('10*0')).toBe(10 * 0);
     expect(calculator.calculation('10*2*5')).toBe(10 * 2 * 5);
     expect(calculator.calculation('10*-2')).toBe(10 * -2);
     expect(calculator.calculation('10*(2-5)')).toBe(10 * (2 - 5));
     expect(calculator.calculation('(10-(2*5))')).toBe((10 - (2 * 5)));

     expect(calculator.calculation('(10*(2+5)')).toBe(undefined);
});

test('Test div', () => {
     expect(calculator.calculation('3/5')).toBe(3 / 5);
     expect(calculator.calculation('0/10')).toBe(0 / 10);
     expect(calculator.calculation('10/0')).toBe(Infinity);
     expect(calculator.calculation('10+2/5')).toBe(10 + 2 / 5);
     expect(calculator.calculation('10/-2')).toBe(10 / -2);
     expect(calculator.calculation('10/(2-4)')).toBe(10 / (2 - 4));
     expect(calculator.calculation('(10-(2/5))')).toBe((10 - (2 / 5)));

     expect(calculator.calculation('(10/(2+5)')).toBe(undefined);
});

test('Test floating point', () => {
     expect(calculator.calculation('3+4.6')).toBe(3 + 4.6);
     expect(calculator.calculation('4.8')).toBe(4.8);
     expect(calculator.calculation('4.8/2')).toBe(4.8 / 2);
     expect(calculator.calculation('10/2.5')).toBe(10 / 2.5);

});





