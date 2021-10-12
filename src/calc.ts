import {Display} from './Display';
import {GenericButton} from './GenericButton';
import {EqualsButton} from './EqualsButton';

export class Calculator {
    private readonly calcDisplay: Display;
    private readonly one: IButton;
    private readonly two: IButton;
    private readonly three: IButton;
    private readonly four: IButton;
    private readonly five: IButton;
    private readonly six: IButton;
    private readonly seven: IButton;
    private readonly eight: IButton;
    private readonly nine: IButton;
    private readonly zero: IButton;
    private readonly decimal: IButton;
    private readonly add: IButton;
    private readonly subtract: IButton;
    private readonly multiply: IButton;
    private readonly divide: IButton;
    private readonly exponent: IButton;

    private readonly equals: IButton;

    constructor() {
        this.calcDisplay = new Display();

        // If prof sees this:
        // Imagine all these strings are set as constants up above, then referenced.
        this.one = new GenericButton('1', this.calcDisplay);
        this.two = new GenericButton('2', this.calcDisplay);
        this.three = new GenericButton('3', this.calcDisplay);
        this.four = new GenericButton('4', this.calcDisplay);
        this.five = new GenericButton('5', this.calcDisplay);
        this.six = new GenericButton('6', this.calcDisplay);
        this.seven = new GenericButton('7', this.calcDisplay);
        this.eight = new GenericButton('8', this.calcDisplay);
        this.nine = new GenericButton('9', this.calcDisplay);
        this.zero = new GenericButton('0', this.calcDisplay);
        this.decimal = new GenericButton('.', this.calcDisplay);
        this.add = new GenericButton('+', this.calcDisplay);
        this.subtract = new GenericButton('-', this.calcDisplay);
        this.multiply = new GenericButton('*', this.calcDisplay);
        this.divide = new GenericButton('/', this.calcDisplay);
        this.exponent = new GenericButton('^', this.calcDisplay);
        this.equals = new GenericButton('=', this.calcDisplay);
    }

    public pressZero(): void {
        this.zero.pressKey();
    }

    public pressOne(): void {
        this.one.pressKey();
    }

    public pressTwo(): void {
        this.two.pressKey();
    }

    public pressThree(): void {
        this.three.pressKey();
    }

    public pressFour(): void {
        this.four.pressKey();
    }

    public pressFive(): void {
        this.five.pressKey();
    }

    public pressSix(): void {
        this.six.pressKey();
    }

    public pressSeven(): void {
        this.seven.pressKey();
    }

    public pressEight(): void {
        this.eight.pressKey();
    }

    public pressNine(): void {
        this.nine.pressKey();
    }

    public pressDecimal(): void {
        this.decimal.pressKey();
    }

    public pressAdd(): void {
        this.add.pressKey();
    }

    public pressSubtract(): void {
        this.subtract.pressKey();
    }

    public pressMultiply(): void {
        this.multiply.pressKey();
    }

    public pressDivide(): void {
        this.divide.pressKey();
    }

    public pressExponent(): void {
        this.exponent.pressKey();
    }

    public pressEquals(): void {
        this.equals.pressKey();
    }

    public display(): string {
        return this.calcDisplay.getDisplay();
    }
}
