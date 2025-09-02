import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle login
  const handleLogin = () => {
    setError(""); // clear old error

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    // If valid, go to showcase
    setPage("showcase");
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Login
      </button>

      <p className="mt-3 text-center">
        Don’t have an account?{" "}
        <button className="text-blue-500" onClick={() => setPage("register")}>
          Register
        </button>
      </p>
    </div>
  );
}
