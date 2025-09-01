import React, { useState } from "react";

const iframeStyle = {
  width: "100%",
  height: "700px",
  border: "none",
  borderRadius: "12px",
};

const frontendUrls = {
  add_member: "http://localhost:3004",
  add_restrictions: "http://localhost:3005",
  view_report: "http://localhost:3006",
};

export default function ParentDashboardShell() {
  const [activePage, setActivePage] = useState(null);

  const handleLogout = () => {
    // Redirect to homepage (localhost:3000)
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Parent Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setActivePage("add_member")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Member
        </button>
        <button
          onClick={() => setActivePage("add_restrictions")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Restrictions
        </button>
        <button
          onClick={() => setActivePage("view_report")}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          View Report
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {/* Example app name buttons */}
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200">App One</button>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200">App Two</button>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200">App Three</button>
      </div>

      {/* Iframe section */}
      <div>
        {activePage && (
          <iframe
            title={activePage}
            src={frontendUrls[activePage]}
            style={iframeStyle}
          />
        )}
      </div>
    </div>
  );
}
