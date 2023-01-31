import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../10-useContext/MainApp";

describe("Pruebas en el <MainApp />", () => {
  test("debe de mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("home")).toBeTruthy();
  });

  test("debe de mostrar el loginPage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
