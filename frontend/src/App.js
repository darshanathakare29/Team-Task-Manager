import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
 useEffect(() => {
  localStorage.removeItem("token");
}, []);

  const [isSignup, setIsSignup] = useState(false);

  if (token) {
    return (
      <div className="container">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            setToken(null);
          }}
        >
          Logout
        </button>

        <Dashboard token={token} />
      </div>
    );
  }

  return (
    <div className="container">
      {isSignup ? (
        <Signup goToLogin={() => setIsSignup(false)} />
      ) : (
        <Login
          setToken={setToken}
          goToSignup={() => setIsSignup(true)}
        />
      )}
    </div>
  );
}

export default App;