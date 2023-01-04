import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iteration = 100) => {
  for (let index = 0; index < iteration; index++) {
    console.log("ahi vamos");
  }

  return `${iteration} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, handleSuma } = useCounter(400);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <hr />
      <button className="btn btn-primary" onClick={handleSuma}>
        +1
      </button>
      <button
        className="btn btn-out-line-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
