import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { useForm } from "../../hooks/useForm";
describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "nicolas",
    email: "nico@gmail.com",
  };

  test("debe regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      setFormState: expect.any(Function),
      onInputChange: expect.any(Function),
      handleReset: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "pepe" } });
    });
    expect(result.current.name).toBe("pepe");
    expect(result.current.formState.name).toBe("pepe");
  });

  test("debe resetear del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, handleReset } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "pepe" } });
      handleReset();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
