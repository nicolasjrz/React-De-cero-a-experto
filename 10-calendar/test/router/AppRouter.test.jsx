import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CalendarPage } from "../../src/calendar/pages/CalendarPage";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { AppRouter } from "../../src/router/AppRouter";

jest.mock("../../src/hooks/useAuthStore");

jest.mock("../../src/calendar/pages/CalendarPage", () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe("Pruebas en el AppRouter", () => {
  const mockCheckAuthToken = jest.fn();

  test("debe de mostar la pantalla de carga y llamar a checkAuthTokon", () => {
    useAuthStore.mockReturnValue({
      status: "checking",
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();

    // screen.debug();
  });

  test("debe de mostar el login si no esta autenticado", () => {
    useAuthStore.mockReturnValue({
      status: "not-authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("Ingreso")).toBeTruthy();

    expect(container).toMatchSnapshot();
    //screen.debug();
  });

  test("debe de mostar el calendario si estamos autenticados", () => {
    useAuthStore.mockReturnValue({
      status: "authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("CalendarPage")).toBeTruthy();
  });
});
