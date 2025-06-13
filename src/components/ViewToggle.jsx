import React from "react";

const ViewToggle = ({ view, setView }) => (
  <div className="flex gap-2">
    <button
      className={`px-3 py-1 rounded ${view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      onClick={() => setView("grid")}
    >
      Grid
    </button>
    <button
      className={`px-3 py-1 rounded ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      onClick={() => setView("list")}
    >
      List
    </button>
  </div>
);

export default ViewToggle;