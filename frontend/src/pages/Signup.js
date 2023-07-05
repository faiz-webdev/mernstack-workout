import React, { useState } from "react";
import { useSignup } from "../components/hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);

    console.log(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit} noValidate>
      <h3>Sign up</h3>
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

      <button disabled={isLoading}>Signup</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Signup;
