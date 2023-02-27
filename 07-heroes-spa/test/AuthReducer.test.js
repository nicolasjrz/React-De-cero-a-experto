import { authReducer } from "../src/auth";
import { types } from "../src/auth/types/types";
describe("Prueba en el AuthReducer", () => {
  const estado = { logged: false };

  test("debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false }, {});
  });

  test("dehe de login llamar el login auteuticar y estabecer el user", () => {
    const action = { type: types.login, payload: { name: "nicolas", id: 123 } };

    const state = authReducer(estado, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("dene de logout borra el name del usuario y logged en false", () => {
    const action = { type: types.logout };

    const state = authReducer(estado, action);
    expect(state).toEqual({ logged: false });
  });
});
