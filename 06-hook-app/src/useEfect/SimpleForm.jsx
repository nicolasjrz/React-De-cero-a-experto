import React, { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "nico",
    email: "nico@gmail.com",
  });

  const { email, username } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log("use effect called");
  });

  return (
    <>
      <h1>simple form</h1>
      <hr />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
