import { authSlice } from "../../../store/auth/authSlice";
import { initialState } from "../__fixtures/authStates";

describe("Pruebas en authSlice", () => {
  test("debe de regresar el estado inicial", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });
});
