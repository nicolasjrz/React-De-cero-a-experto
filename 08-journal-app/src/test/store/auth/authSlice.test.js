import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixture";

describe("Pruebas en el authSlice", () => {
  test('debe de regresar el estado inicial y llamarte "auth"', () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("debe de realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout y mostrar el mensaje de error", () => {
    const errorMessage = "error de autentication";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test("debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
