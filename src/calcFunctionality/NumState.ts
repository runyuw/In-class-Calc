import {Display} from './Display';
import {Identifiers} from './Identifiers';
import {OperatorState} from './OperatorState';
import {EqualState} from './EqualsState';
import {evaluate} from 'mathjs';
import {IState} from "./IState";
import axios from 'axios';


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
            this.calculate().then((accept) => {
                this.display.setDisplay(accept.toString());
            })

            return new EqualState(this.display);
        }

        return this;
    }

    private async calculate() {
        const displayString: string[] = this.display.getDisplay().split('+');

        let sum: number = 0;

        for (const part of displayString) {
            let evaluatedNumber: number = evaluate(part);

            await axios.get(`http://localhost:8000/calculator?op=add&arg1=${sum}&arg2=${evaluatedNumber}`)
                .then((response) => { sum = response.data.result })
                .catch((error) => { throw new Error(error) });
        }

        return sum;
    }
}
