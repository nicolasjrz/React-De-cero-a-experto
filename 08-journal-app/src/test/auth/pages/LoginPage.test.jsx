import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../auth/pages/LoginPage";
import { authSlice } from "../../../store/auth/authSlice";
import { notAuthenticatedState } from "../../fixtures/authFixture";

const mockStartGoogleSignIn = jest.fn();

const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword({ email, password });
  },
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Pruebas en LoginPage", () => {
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("boton de google debe de llaar el startGoogleSignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");

    fireEvent.click(googleBtn);

    expect(mockStartGoogleSignIn).toHaveBeenCalledWith();
  });

  test("submit debe de llamar startLoadingWithEmailPassword", () => {
    const email = "nico@gmail.com";
    const pass = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Email" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });
    const passField = screen.getByTestId("password");
    fireEvent.change(passField, { target: { name: "password", value: pass } });

    const loginForm = screen.getByLabelText("submit-form");
    fireEvent.submit(loginForm);
    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: pass,
    });
  });
});
