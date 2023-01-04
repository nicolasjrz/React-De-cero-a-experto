import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("pruebas en en el hook use fecht gifs", () => {
  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("one puncho"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe retornar un arreglo y isloading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("one puncho"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
