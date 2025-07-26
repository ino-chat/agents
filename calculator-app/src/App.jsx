import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  return (
    <div className="calculator-container">
      <div className="display">{displayValue || '0'}</div>
      <div className="grid-container">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="clear" onClick={clearDisplay}>C</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button className="equals" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
