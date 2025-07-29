import React, { useState } from "react";
import "./App.css";
function App() {

  // State management //
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');


  // Add the next operator or number while not allowing the user to press 2 operators back to back //
  const calculate = value => {
    const lastChar = calc.slice(-1)
    
    const ops = ['+','-','*','/','.']

    if (ops.includes(lastChar) && ops.includes(value)) {
      return;
    }
    
    setCalc(calc + value)
  }


  // result with same logic as calculate //
  const equals = () => {
    const lastChar = calc.slice(-1)

    const ops = ['+','-','*','/','.']

    if (ops.includes(lastChar)) {
      return;
    }
    
    try {
      setResult(eval(calc)) 
    } catch (err) {
      setResult('Syntax Error')
    }
  }
  
  // delete the last value //
  const del = () => {
    setCalc(calc.slice(0,-1))
    }

  // reset the display //
  const ac = () => {
    setResult("")
    setCalc("")
  }

  return (

    <div className = "App">
      <h1 className="header">
        SUPER CALCULATOR
        <span className="cap">🧢 cap</span>
      </h1>
      <div className = "calculator">
        
        <div className = "display">
          {/* Show "0" if both calc and result are empty */}
          {calc === "" && result === "" ? "0" : null}

          {/* If result exists, show result, otherwise, show calc */}
          {result !== "" ? result : calc}
        </div>  
        <div className = "operators">
          <button value = "+" onClick = { () => calculate('+') }>+</button>
          <button value = "-" onClick = { () => calculate('-') }>-</button>
          <button value = "*" onClick = { () => calculate('*') }>x</button>
          <button value = "/" onClick = { () => calculate('/') }>÷</button>          
          <button onClick={() => ac() }>AC</button>
          <button onClick={() => del()}>DEL</button>
        </div>
        <div className = "numbers">
          <button value = "9" onClick = { () => calculate('9') }>9</button>
          <button value = "8" onClick = { () => calculate('8') }>8</button>
          <button value = "7" onClick = { () => calculate('7') }>7</button>
          <button value = "6" onClick = { () => calculate('6') }>6</button>
          <button value = "5" onClick = { () => calculate('5') }>5</button>
          <button value = "4" onClick = { () => calculate('4') }>4</button>
          <button value = "3" onClick = { () => calculate('3') }>3</button>
          <button value = "2" onClick = { () => calculate('2') }>2</button>
          <button value = "1" onClick = { () => calculate('1') }>1</button>
          <button value = "0" onClick = { () => calculate('0') }>0</button>
          <button value = "." onClick = { () => calculate('.') }>.</button>          
          <button value = "=" onClick = { () => equals() }>=</button>          
        </div>
      </div>
    </div>    
  )
}

export default App;
