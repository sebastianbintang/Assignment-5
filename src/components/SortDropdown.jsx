import React from "react";

const SortDropdown = ({ sort, setSort }) => (
  <select
    value={sort}
    onChange={e => setSort(e.target.value)}
    className="border rounded px-2 py-1"
  >
    <option value="az">Name A-Z</option>
    <option value="za">Name Z-A</option>
  </select>
);

export default SortDropdown;