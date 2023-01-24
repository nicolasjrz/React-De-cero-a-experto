import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleSuma = (value = 1) => {
    setCounter((current) => counter + value);
  };
  const handleResta = (value = 1) => {
    if (counter > 1) setCounter((current) => counter - value);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    handleSuma,
    handleResta,
    handleReset,
  };
};
