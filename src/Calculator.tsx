import React, {useState} from 'react';
import './Calculator.css';
import {Calc} from "./calcFunctionality/calc";

function CalculatorDisplay(arg: any) {
  return <div className="calculator-display">{arg.arg}</div>;
}
function CalculatorKey(arg: any) {
  return <button className={`calculator-key ${arg.className}`}  onClick={arg.onPress}>{arg.label}</button>;         
}
export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [calculatorObject] = useState(new Calc(setDisplay));

  return (
    <div className="calculator">
      <CalculatorDisplay arg={display}/>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey className="key-clear" label="C" onPress={() => { setDisplay(0) }}>{'C'}</CalculatorKey>
            {/*<CalculatorKey className="key-sign" label="±" onPress={() => { alert("key-sign pressed"); }}>±</CalculatorKey>*/}
            <CalculatorKey className="key-exponent" label="^" onPress={() => { calculatorObject.pressExponent() }}>^</CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey className="key-0" label="0" onPress={() => { calculatorObject.pressZero() }}>0</CalculatorKey>
            <CalculatorKey className="key-dot" label="•" onPress={() => { calculatorObject.pressDecimal() }}>●</CalculatorKey>
            <CalculatorKey className="key-1" label="1" onPress={() => { calculatorObject.pressOne() }}>1</CalculatorKey>
            <CalculatorKey className="key-2" label="2" onPress={() => { calculatorObject.pressTwo() }}>2</CalculatorKey>
            <CalculatorKey className="key-3" label="3" onPress={() => { calculatorObject.pressThree() }}>3</CalculatorKey>
            <CalculatorKey className="key-4" label="4" onPress={() => { calculatorObject.pressFour() }}>4</CalculatorKey>
            <CalculatorKey className="key-5" label="5" onPress={() => { calculatorObject.pressFive() }}>5</CalculatorKey>
            <CalculatorKey className="key-6" label="6" onPress={() => { calculatorObject.pressSix() }}>6</CalculatorKey>
            <CalculatorKey className="key-7" label="7" onPress={() => { calculatorObject.pressSeven() }}>7</CalculatorKey>
            <CalculatorKey className="key-8" label="8" onPress={() => { calculatorObject.pressEight() }}>8</CalculatorKey>
            <CalculatorKey className="key-9" label="9" onPress={() => { calculatorObject.pressNine() }}>9</CalculatorKey>
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey className="key-divide" label="/" onPress={() => { calculatorObject.pressDivide() }}>÷</CalculatorKey>
          <CalculatorKey className="key-multiply" label="×" onPress={() => { calculatorObject.pressMultiply() }}>*</CalculatorKey>
          <CalculatorKey className="key-subtract" label="-" onPress={() => { calculatorObject.pressSubtract() }}>−</CalculatorKey>
          <CalculatorKey className="key-add" label="+" onPress={() => { calculatorObject.pressAdd() }}>+</CalculatorKey>
          <CalculatorKey className="key-equals" label="=" onPress={() => { calculatorObject.pressEquals() }}>=</CalculatorKey>
        </div>
      </div>
    </div>
  ) 
}
