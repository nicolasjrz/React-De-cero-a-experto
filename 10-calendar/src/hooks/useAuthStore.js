import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import {
  clearErrorMsg,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({
      email,
      password,
    });

    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMsg());
      }, 10);
    }
  };

  return {
    //propiedades
    status,
    user,
    errorMessage,
    //metodos

    startLogin,
  };
};
