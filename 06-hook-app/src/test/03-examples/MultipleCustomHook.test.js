import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Prueba en el multiple custom hook", () => {
  const increment = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    handleSuma: increment,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar ell componente por defecto ", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
    useCounter.mockReturnValue({
      counter: 1,
      handleSuma: increment,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("breacking quotes"));
    const nextButton = screen.getByRole("button", { name: "next quote" });
    expect(nextButton.disabled).toBeTruthy();
    //screen.debug();
  });

  test("debe mostrar el valor de un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "nicolas", quote: "hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("hola mundo")).toBeTruthy();
    expect(screen.getByText("nicolas")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "nicolas", quote: "hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "next quote" });
    fireEvent.click(nextButton);
    expect(increment).toHaveBeenCalled();
  });
});
