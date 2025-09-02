import { useState } from "react";

export default function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Password validation function
  const validatePassword = (pwd) => {
    const minLength = /.{8,}/; // at least 8 chars
    const firstUpper = /^[A-Z]/; // first char uppercase
    const hasLower = /[a-z]/; // at least one lowercase
    const hasSymbol = /[^A-Za-z0-9]/; // at least one symbol

    return (
      minLength.test(pwd) &&
      firstUpper.test(pwd) &&
      hasLower.test(pwd) &&
      hasSymbol.test(pwd)
    );
  };

  const handleRegister = () => {
    setError(""); // clear old error

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!validatePassword(password)) {
      setError(
        "Password must be 8+ chars, start with uppercase, include lowercase and symbol."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If valid, move to showcase page
    setPage("showcase");
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

      <input
        type="text"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full mb-3 p-2 border rounded"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        onClick={handleRegister}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Register
      </button>

      <p className="mt-3 text-center">
        Already have an account?{" "}
        <button className="text-blue-500" onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </div>
  );
}
