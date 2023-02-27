import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../src/auth";
import { Navbar } from "../src/iu/components/NavBar";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Prueba en el navbar", () => {
  beforeEach(() => jest.clearAllMocks());
  const contextValue = {
    logged: false,
    user: { id: 123, name: "nicolas" },
    logout: jest.fn(),
  };
  test("debe de mostar el user", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("nicolas")).toBeTruthy();
  });

  test("debe de llamar el logout y navigate cuando se hace el click en el boton", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByRole("button");
    fireEvent.click(logoutButton);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});
