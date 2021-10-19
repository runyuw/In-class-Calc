import {Display} from './Display';
import {Identifiers} from './Identifiers';
import {OperatorState} from './OperatorState';
import {NumState} from './NumState';
import {IState} from "./IState";


export class EqualState implements IState {
    private display: Display;

    constructor(display: Display) {
        this.display = display;
    }

    public process(value: string): IState {
        if (Identifiers.operatorIdentifier.test(value)) {
            this.display.appendToDisplayValue(value);
            return new OperatorState(this.display);
        } else if (Identifiers.numbersIdentifier.test(value)) {
            this.display.setDisplay(value);
            return new NumState(this.display);
        } else if (Identifiers.equalsIdentifier.test(value)) {
            throw new Error('the expression has already been evaluated');
        }

        return this;
    }
}
