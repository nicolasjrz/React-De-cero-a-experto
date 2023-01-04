import useCounter from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, handleSuma, handleResta, handleReset } = useCounter(10);

  return (
    <>
      <h1>counter with hook : {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleSuma}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={handleResta}>
        -1
      </button>
    </>
  );
};
