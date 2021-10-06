import { Calculator } from './calc';
import { expect } from 'chai';
import { evaluate } from 'mathjs';
describe('Calculator', (): void => {
    describe('entering numbers', (): void => {
        it('should let you enter 1-digit numbers', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            expect(calc.display()).to.equal('1');
        });
        it('should let you enter 2-digit numbers', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            calc.pressTwo();
            expect(calc.display()).to.equal('12');
        });
    });
});


describe('Calculator', (): void => {
    describe('using operators', (): void => {
        it('should know how to add numbers', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            calc.pressTwo();
            calc.pressAdd();
            calc.pressThree();
            calc.pressFive();
            calc.pressEquals();
            expect(calc.display()).to.equal('47');
        });
        it('should know how to multiply numbers', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressSix();
            calc.pressSeven();
            calc.pressMultiply();
            calc.pressEight();
            calc.pressNine();
            calc.pressEquals();
            expect(calc.display()).to.equal('5963');
        });
        it('should know how to divide numbers', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            calc.pressTwo();
            calc.pressDivide();
            calc.pressTwo();
            calc.pressOne();
            calc.pressEquals();
            expect(calc.display().startsWith('0.571'));
        });
        it('should know how to do exponent', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            calc.pressZero();
            calc.pressExponent();
            calc.pressThree();
            calc.pressEquals();
            expect(calc.display()).to.equal('1000');
        });
        it('should know how to do chain operation', (): void => {
            const calc: Calculator = new Calculator();
            calc.pressOne();
            calc.pressTwo();
            calc.pressAdd();
            calc.pressTwo();
            calc.pressSubtract();
            calc.pressFour();
            calc.pressDecimal();
            calc.pressTwo();
            calc.pressEquals();
            expect(calc.display()).to.equal('9.8');
        });
    });
});

