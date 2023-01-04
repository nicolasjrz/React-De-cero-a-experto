import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    //setCategories((categories) => [value, ...categories]);
    onNewCategory(value.trim());
    setValue("");
  };
  return (
    <form aria-label="form" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        name="input"
        id="input"
        placeholder="search gift"
        onChange={handleInputChange}
        value={value}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
