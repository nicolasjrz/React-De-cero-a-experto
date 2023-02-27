import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../src/auth";
import { AppRouter } from "../src/router/AppRouter";

describe("pruebas en app router", () => {
  test("debe de mostarr el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe de mostarr marvel si esta autentificado", () => {
    const contextValue = {
      logged: true,
      user: { id: 123, name: "nicolas" },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel comics")).toBeTruthy();
    // expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
