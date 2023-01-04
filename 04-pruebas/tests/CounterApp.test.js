import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/componets/CounterApp";

describe("Test de contador anashe", () => {
  const value = 10;
  test("debe de hacer match con el snapshot ", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostar el valor inicial de 100", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(screen.getByText(value).innerHTML).toContain("10");
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("12")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    //fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("10")).toBeTruthy();
  });

  test("debe de resetear los valores  con el boton reset", () => {
    render(<CounterApp value={value} />);
    //fireEvent.click(screen.getByText("reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("10")).toBeTruthy();
  });
});
