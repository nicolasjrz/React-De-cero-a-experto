import { useState } from "react";

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const handleSuma = () => {
    setCounter(counter + 1);
  };
  const handleResta = () => {
    if (counter > 1) setCounter(counter - 1);
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
