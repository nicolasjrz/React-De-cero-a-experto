import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("me volvie a generar");
  return <small>{value}</small>;
});
