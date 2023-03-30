import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Children } from "react";
import { Provider } from "react-redux";
import { useIuStore } from "../../src/hooks/useUiStore";
import { uiSlice } from "../../src/store/iu/uiSlice";
import { store } from "../../src/store/store";

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState },
    },
  });
};

describe("Pruebas en useUiStore", () => {
  test("debe regresar los valores por defectos", () => {
    const mockStore = getMockStore({ isDateModalOpen: false });
    const { result } = renderHook(() => useIuStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
    });
  });

  test("onOpenDateModal debe de colocar true en el isDateModalOpen ", () => {
    const mockStore = getMockStore({ isDateModalOpen: false });
    const { result } = renderHook(() => useIuStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { openDateModal } = result.current;

    act(() => {
      openDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test("closeDateModal debe de colocar false en el isDateModalOpen ", () => {
    const mockStore = getMockStore({ isDateModalOpen: true });
    const { result } = renderHook(() => useIuStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { closeDateModal } = result.current;

    act(() => {
      closeDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();
  });
});
