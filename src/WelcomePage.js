import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Parental Control</h1>
      <p>Choose your role to continue</p>

      <button
        style={{
          display: "block",
          margin: "10px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
        onClick={() => (window.location.href = "http://localhost:3007")} // Child Login external redirect
      >
        I am a Child
      </button>

      <button
        style={{
          display: "block",
          margin: "10px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
        onClick={() => navigate("/parent")}
      >
        I am a Parent
      </button>
    </div>
  );
}
