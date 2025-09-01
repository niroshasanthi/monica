/*
import React, { useEffect, useState } from "react";
import ParentDashboardShell from "./ParentDashboard";

function DashboardApp() {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setAuthToken(token);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authToken) {
    window.location.href = "http://localhost:3001"; // redirect to login
    return null;
  }

  return <ParentDashboardShell />;
}

export default DashboardApp;
*/