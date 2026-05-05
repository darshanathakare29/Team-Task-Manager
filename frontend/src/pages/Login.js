import { useState } from "react";
import { login } from "../api/api";

function Login({ setToken, goToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async () => {
  try {
    const res = await login({ email, password });

    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
    } else {
      alert("Invalid credentials");
    }

  } catch (err) {
    console.error(err);
    alert("Login failed. Check backend.");
  }
};

  return (
  <div className="auth-container">
    <div className="auth-card">
      <h2 className="auth-title">Welcome Back 👋</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className="link" onClick={goToSignup}>
        Don't have an account? Register
      </p>
    </div>
  </div>
);
}

export default Login;
