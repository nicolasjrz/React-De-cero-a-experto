import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleRef = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>focus ref</h1>
      <hr />

      <input
        type="text"
        placeholder="ingrese su nombre"
        ref={inputRef}
        className="form-control"
      />

      <button onClick={handleRef} className="form-control btn btn-primary mt-2">
        set focus
      </button>
    </>
  );
};
