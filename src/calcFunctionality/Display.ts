import {ClearState} from './ClearState';
import {IState} from "./IState";

export class Display {
    private state: IState;
    private displayValue: string;
    private setRDisplay: any;

    constructor(setRDisplay: any) {
        this.state = new ClearState(this);
        this.displayValue = '';
        this.setRDisplay = setRDisplay;

    }

    public getDisplay(): string {
        return this.displayValue;
    }

    public setDisplay(newDisplayValue: string): void {
        this.displayValue = newDisplayValue;
        this.setRDisplay(this.displayValue);
    }

    public appendToDisplayValue(value: string): void {
        this.displayValue += value;
        this.setRDisplay(this.displayValue);
    }

    public append(value: string): void {
        this.state = this.state.process(value);
    }
}
