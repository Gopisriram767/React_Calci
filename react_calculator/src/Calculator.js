import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // Safe evaluation of mathematical expression
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="background-shards"></div>
      <div className="calculator-glass">
        <div className="display-panel">
          <input type="text" value={input || '0'} disabled />
        </div>
        <div className="keypad-grid">
          <button className="btn btn-clear sharp-edge" onClick={handleClear}>C</button>
          <button className="btn btn-op sharp-edge" onClick={() => handleClick('/')}>/</button>
          <button className="btn btn-op sharp-edge" onClick={() => handleClick('*')}>*</button>
          <button className="btn btn-op sharp-edge" onClick={() => handleClick('-')}>-</button>
          
          <button className="btn sharp-edge" onClick={() => handleClick('7')}>7</button>
          <button className="btn sharp-edge" onClick={() => handleClick('8')}>8</button>
          <button className="btn sharp-edge" onClick={() => handleClick('9')}>9</button>
          <button className="btn btn-op sharp-edge" onClick={() => handleClick('+')}>+</button>
          
          <button className="btn sharp-edge" onClick={() => handleClick('4')}>4</button>
          <button className="btn sharp-edge" onClick={() => handleClick('5')}>5</button>
          <button className="btn sharp-edge" onClick={() => handleClick('6')}>6</button>
          <button className="btn btn-equal sharp-edge" onClick={handleCalculate}>=</button>
          
          <button className="btn sharp-edge" onClick={() => handleClick('1')}>1</button>
          <button className="btn sharp-edge" onClick={() => handleClick('2')}>2</button>
          <button className="btn sharp-edge" onClick={() => handleClick('3')}>3</button>
          
          <button className="btn btn-zero sharp-edge" onClick={() => handleClick('0')}>0</button>
          <button className="btn sharp-edge" onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;