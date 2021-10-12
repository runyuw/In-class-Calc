import {Display} from './Display';
import {Identifiers} from './Identifiers';
import {NumState} from './NumState';
import {EqualState} from './EqualsState';

export class OperatorState implements IState {
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
            throw new Error('cannot use equals cause another operator was inputted');
        }
    }
}
