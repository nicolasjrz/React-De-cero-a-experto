import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const { username, email, password } = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>
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

      <input
        type="text"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={handleReset} className="btn btn-primary mt-2">
        reset
      </button>
    </>
  );
};
