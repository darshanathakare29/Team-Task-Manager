import { useState } from "react";
import { signup } from "../api/api";

function Signup({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup({ name, email, password });
    alert("Signup successful! Please login.");
    goToLogin();
  };

  return (
  <div className="auth-container">
    <div className="auth-card">
      <h2 className="auth-title">Create Account 🚀</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Register</button>

      <p className="link" onClick={goToLogin}>
        Already have an account? Login
      </p>
    </div>
  </div>
);
}

export default Signup;