import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter";

describe("Prueba en el use counter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter, handleSuma, handleResta, handleReset } = result.current;

    expect(counter).toBe(10);
    expect(handleResta).toEqual(expect.any(Function));
    expect(handleSuma).toEqual(expect.any(Function));
    expect(handleReset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("debe decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { handleResta } = result.current;

    act(() => {
      handleResta();
    });

    expect(result.current.counter).toBe(9);
  });

  test("debe incrementar el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { handleSuma } = result.current;

    act(() => {
      handleSuma();
    });

    expect(result.current.counter).toBe(11);
  });

  test("debe resetear el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { handleSuma, handleReset } = result.current;

    act(() => {
      handleSuma();
      handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
