import React from "react";
import PropTypes from "prop-types";
const FirstApp = ({ title, subtitle, parrafo }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>

      <p>{subtitle}</p>
      <p>{parrafo}</p>
    </>
  );
};

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  //title: "Prueba de react",
  subtitle: "no hay subtitulo",
  parrafo: "no hay parrafo",
};
