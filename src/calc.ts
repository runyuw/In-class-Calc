import {evaluate} from 'mathjs';

export class Calculator {
    // these methods will be invoked when the numeric buttons on
    // your calculator are pressed
    private currentVal: string = '';
    // private operator: string = ''
    private memory: string = '';
    public pressKey(key: String): void { this.currentVal = this.currentVal + key; }
    public pressZero(): void { this.pressKey('0'); }
    public pressOne(): void { this.pressKey('1'); }
    public pressTwo(): void { this.pressKey('2'); }
    public pressThree(): void { this.pressKey('3'); }
    public pressFour(): void { this.pressKey('4'); }
    public pressFive(): void { this.pressKey('5'); }
    public pressSix(): void { this.pressKey('6'); }
    public pressSeven(): void { this.pressKey('7'); }
    public pressEight(): void { this.pressKey('8'); }
    public pressNine(): void { this.pressKey('9'); }
    public pressDecimal(): void { this.pressKey('.'); }
    // similar for the other numeric buttons
    // returns the contents of the calculator's display
    public display(): string { return this.currentVal.toString(); }

    // method that is executed when the + button is pressed

    public pressOperator(operator: string): void {
        this.memory += this.currentVal;
        this.memory += operator;
        this.currentVal = '';
        // this.operator = operator
    }

    public pressPlus(): void {
        this.pressOperator('+');
    }

    public pressSubtract(): void {
        this.pressOperator('-');
    }

    public pressMultiply(): void {
        this.pressOperator('*');
    }

    public pressDivide(): void {
        this.pressOperator('/');
    }

    public pressExponent(): void {
        this.pressOperator('^');
    }

    // method that is executed when the = button is pressed
    public pressEquals(): void {
        this.memory += this.currentVal;
        this.currentVal = evaluate(this.memory).toString();
    }
}
