import React from "react";
import { useNavigate } from "react-router-dom";

export default function ParentShell() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Parent Portal</h2>
      <p>Please choose an option</p>

      <button
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px 20px",
          fontSize: 18,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
        onClick={() => (window.location.href = "http://localhost:3001")}
      >
        Login
      </button>

      <button
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px 20px",
          fontSize: 18,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
        }}
        onClick={() => (window.location.href = "http://localhost:3002")}
      >
        Signup
      </button>

      <button
        style={{
          display: "block",
          margin: "25px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
          backgroundColor: "#ccc",
        }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}
