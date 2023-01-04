import React, { useState } from "react";

export const HooksApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const [{ counterA, counterB, counterC }, setCounter2] = useState({
    counterA: 100,
    counterB: 200,
    counterC: 300,
  });
  return (
    <>
      <h1>Counter 1: {counter.counter1}</h1>
      <h1>Counter 2: {counter.counter2} </h1>
      <h1>Counter 3: {counter.counter3}</h1>
      <hr />
      <h1>Counter 1: {counterA}</h1>
      <h1>Counter 2: {counterB} </h1>
      <h1>Counter 3: {counterC}</h1>
      <hr />
      <button
        onClick={() =>
          setCounter({ ...counter, counter1: counter.counter1 + 1 })
        }
      >
        +1
      </button>

      <hr />
      <button
        onClick={() =>
          setCounter2({
            counterA: counterA + 1,
            counterB: counterB,
            counterC: counterC,
          })
        }
      >
        +1
      </button>
    </>
  );
};
