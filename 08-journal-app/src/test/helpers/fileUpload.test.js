import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "react-nicolas",
  api_key: "655762474843756",
  api_secret: "YzGxVZM5zNVpqR6LYd_nfBkAXCM",
  secure: true,
});

describe("Pueba de fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imgUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwEgGWJs3eWKWkbmaS_k9XbAwFlAvUuAruA&usqp=CAU";

    const resp = await fetch(imgUrl);
    const blob = await resp.blob();
    const file = new File([blob], "fotoPrueba.jpg");
    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imgId = segments[segments.length - 1].replace(".jpg", "");

    const rspCluod = await cloudinary.api.delete_resources([
      "journal-app/" + imgId,
    ]);
  });

  test("debe retornar null", async () => {
    const file = new File([], "fotoPrueba.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
