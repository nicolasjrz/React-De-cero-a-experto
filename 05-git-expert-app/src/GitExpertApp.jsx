import React, { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAdddCategory = (value) => {
    if (categories.includes(value)) return alert("category already added");
    setCategories([...categories, value]);
    //setCategories((cat) => [...categories, "valorant"]);
    //console.log(value);
  };
  return (
    <>
      <h1 className="title-app">Gif Expert App</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAdddCategory(value)}
      />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
