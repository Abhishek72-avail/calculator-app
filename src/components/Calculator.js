import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Evaluate the expression (Use caution with eval)
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly className="calculator-display" />
      <div className="calculator-buttons">
        {["7", "8", "9", "/"].map((val) => (
          <Button key={val} label={val} onClick={() => handleClick(val)} />
        ))}
        {["4", "5", "6", "*"].map((val) => (
          <Button key={val} label={val} onClick={() => handleClick(val)} />
        ))}
        {["1", "2", "3", "-"].map((val) => (
          <Button key={val} label={val} onClick={() => handleClick(val)} />
        ))}
        {["0", ".", "=", "+"].map((val) => (
          <Button key={val} label={val} onClick={() => handleClick(val)} />
        ))}
        <Button label="C" onClick={() => handleClick("C")} />
      </div>
    </div>
  );
};

export default Calculator;
