import { string } from "mathjs";
import { Display } from "./Display";
import { Identifiers } from "./RegularExpressions";
import { NumState } from "./NumState";

export class ClearState implements IState {
    private display: Display;

    constructor (display: Display) {
        this.display = display;
    }

    public process(value: string): IState {
        if (Identifiers.operatorIdentifier.test(value)) {
            throw new Error("cannot start with an operator");
        }

        if (Identifiers.numbersIdentifier.test(value)) {
            this.display.appendToDisplayValue(value);
            return new NumState(this.display);
        }
    }
}