import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setcounter] = useState(value);

  const handleSuma = () => {
    setcounter(counter + 1);
  };

  const handleResta = () => {
    if (counter > value) {
      setcounter(counter - 1);
    }
  };

  const handleReset = () => {
    setcounter(value);
  };
  return (
    <>
      <h1>counter app </h1>
      <h2>{counter}</h2>
      <button onClick={handleSuma}>+1</button>
      <button onClick={handleResta}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 1,
};

export default CounterApp;
