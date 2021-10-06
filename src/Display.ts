export class Display {
    private displayValue: string;

    constructor() {
        this.displayValue = '';
    }

    public getDisplay(): string {
        return this.displayValue;
    }

    public setDisplay(newDisplayValue: string): void {
        this.displayValue = newDisplayValue;
    }

    public appendToDisplayValue(value: string): void {
        this.displayValue += value;
    }
}
