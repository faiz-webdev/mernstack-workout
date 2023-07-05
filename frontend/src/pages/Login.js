import React, { useState } from "react";
import { useLogin } from "../components/hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)

    setEmail('');
    setPassword('');
  };

  return (
    <form className="login" onSubmit={handleSubmit} noValidate>
      <h3>Login</h3>
      <label htmlFor="">Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} onClick={handleSubmit}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Login;
