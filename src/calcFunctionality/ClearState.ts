import {string} from 'mathjs';
import {Display} from './Display';
import {Identifiers} from './Identifiers';
import {NumState} from './NumState';
import {EqualState} from './EqualsState';
import {IState} from "./IState";


export class ClearState implements IState {
    private readonly display: Display;

    constructor(display: Display) {
        this.display = display;
    }


    public process(value: string): IState {
        if (Identifiers.operatorIdentifier.test(value)) {
            throw new Error('cannot start with an operator');
        } else if (Identifiers.numbersIdentifier.test(value)) {
            this.display.appendToDisplayValue(value);
            return new NumState(this.display);

        } else if (Identifiers.equalsIdentifier.test(value)) {
            return new EqualState(this.display);
        }

        return this;
    }
}
