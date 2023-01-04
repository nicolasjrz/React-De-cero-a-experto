const getUsuarioActivo = (nombre) => ({
  uid: "avbc1234",
  username: nombre,
});

const usuario = getUsuarioActivo("nicolas");
console.log(usuario);
