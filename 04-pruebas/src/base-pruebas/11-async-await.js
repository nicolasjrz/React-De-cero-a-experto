// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const api_key = "gIbgAxARtogmrtPUWSZQARUt07Q9g05k";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    console.log(url);
  } catch (error) {
    // manejo del error
    //console.error(error);
    return "no se encontro la imagen";
  }
};
