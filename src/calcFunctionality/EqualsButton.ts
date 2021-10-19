import {evaluate} from 'mathjs';
import {Display} from './Display';
import {IButton} from "./IButton";

export class EqualsButton implements IButton {
    private display: Display;

    constructor(display: Display) {
        this.display = display;
    }

    public pressKey(): void {
        this.display.setDisplay(
            evaluate(this.display.getDisplay()).toString());
    }
}
