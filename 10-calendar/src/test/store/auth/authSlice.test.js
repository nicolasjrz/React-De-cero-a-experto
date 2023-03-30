import {
  authSlice,
  clearErrorMsg,
  onChecking,
  onLogin,
  onLogout,
} from "../../../store/auth/authSlice";
import { authenticatedState, initialState } from "../__fixtures/authStates";
import { testUserCredentials } from "../__fixtures/testUser";

describe("Pruebas en authSlice", () => {
  test("debe de regresar el estado inicial", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("debe de regresar checking", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    const newState = authSlice.reducer(state, onChecking());

    expect(newState).toEqual({
      status: "checking",
      user: {},
      errorMessage: undefined,
    });
  });

  test("debe de realizar un login", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    expect(state).toEqual({
      status: "authenticated",
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, onLogout());

    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout con mensaje", () => {
    const errorMessage = "Credenciales no validas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: errorMessage,
    });
  });

  test("debe de limpiar el mensaje de error", () => {
    const errorMessage = "Credenciales no validas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    const newState = authSlice.reducer(state, clearErrorMsg());

    expect(newState.errorMessage).toBe(undefined);
  });
});
