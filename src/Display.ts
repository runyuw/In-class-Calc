import { ClearState } from "./ClearState";

export class Display {
    private state: IState;
    private displayValue: string;

    constructor() {
        this.state = new ClearState(this);
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

    public append(value: string): void {
        this.state = this.state.process(value);
    }
}
