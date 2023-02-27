import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../src/auth";
import { PublicRoute } from "../src/router/PublicRoute";

describe("prueba en el public route", () => {
  test("si no esta autenticado debe mostrar el children", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Rutas publicas</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Rutas publicas")).toBeTruthy();
  });

  test("debe de navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: { id: 123, name: "nicolas" },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="marvel" element={<h1>Pagina de marvel </h1>} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Rutas publicas</h1>
                </PublicRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina de marvel")).toBeTruthy();
  });
});
