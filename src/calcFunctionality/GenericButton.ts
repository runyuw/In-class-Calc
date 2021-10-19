import {Display} from './Display';
import {IButton} from "./IButton";

export class GenericButton implements IButton {
    private readonly buttonChar: string;
    private readonly display: Display;

    constructor(num: string, display: Display) {
        this.buttonChar = num;
        this.display = display;
    }

    public pressKey(): void {
        this.display.append(this.buttonChar);
    }
}
