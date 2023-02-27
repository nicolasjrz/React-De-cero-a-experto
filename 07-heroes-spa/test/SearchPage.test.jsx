import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../src/heroes/pages";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("pruebas en Search Page", () => {
  beforeEach(() => jest.clearAllMocks());
  test("debe mostrarse correctamente con los valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("debe mostrarse a batman y el input con el valor del quyeryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

    const alert = screen.getByLabelText("alert-hero");

    expect(alert.style.display).toBe("none");
  });

  test("debe mostrarse un mensaje si no se encuentra el heroe", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batmanasdasd"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText("alert-hero");

    expect(alert.style.display).toBe("");
  });

  test("dene de llamar el navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Spider Man" } });

    const onsubmit = screen.getByRole("button");
    fireEvent.click(onsubmit);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=Spider Man");
  });
});
