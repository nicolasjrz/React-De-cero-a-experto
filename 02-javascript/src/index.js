const getImagen = async () => {
  const api_key = "gIbgAxARtogmrtPUWSZQARUt07Q9g05k";
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
  );
  const { data } = await resp.json();
  const { url } = data.images.original;
  imprimirImagen(url);
};

const imprimirImagen = (url) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

getImagen();
