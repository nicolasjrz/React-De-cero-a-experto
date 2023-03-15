import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithPassword,
  singInWithGoogle,
} from "../../../firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../store/auth/authSlice";
import {
  checkingAuthentication,
  startCreatingWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../store/auth/thunks";
import { clearNotesLogout } from "../../../store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixture";
jest.mock("../../../firebase/providers");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("debe autenticar cheking credentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar checkingCredentials  y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe de llamar checkingCredentials  y login - Error", async () => {
    const loginData = { ok: false, errorMessage: "Error con Google" };
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startCreatingWithEmailPassword  debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };

    const formData = {
      email: demoUser.email,
      password: "12345",
    };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout  debe de llamar logoutFirebase,clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  test("startCreatingWithEmailPassword debe de crear un usuario - Exito", async () => {
    const data = {
      ok: true,
      ...demoUser,
      password: "1234",
    };
    await registerUserWithPassword.mockResolvedValue(data);
    await startCreatingWithEmailPassword(data)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(data));
  });

  test("startCreatingWithEmailPassword debe de crear un usuario - Error", async () => {
    const data = {
      ok: false,
      errorMessage: "Error con Google",
    };
    await registerUserWithPassword.mockResolvedValue(data);
    await startCreatingWithEmailPassword(data)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(data.errorMessage));
  });
});
