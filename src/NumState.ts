import {Display} from './Display';
import {Identifiers} from './Identifiers';
import {OperatorState} from './OperatorState';
import {EqualState} from './EqualsState';
import {evaluate} from 'mathjs';

export class NumState implements IState {
    private display: Display;

    constructor(display: Display) {
        this.display = display;
    }

    public process(value: string): IState {
        if (Identifiers.operatorIdentifier.test(value)) {
            this.display.appendToDisplayValue(value);
            return new OperatorState(this.display);
        } else if (Identifiers.numbersIdentifier.test(value)) {
            this.display.appendToDisplayValue(value);
            return new NumState(this.display);
        } else if (Identifiers.equalsIdentifier.test(value)) {
            this.display.setDisplay(evaluate(this.display.getDisplay()).toString());
            return new EqualState(this.display);
        }
    }
}
