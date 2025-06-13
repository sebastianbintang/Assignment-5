import React, { useState } from "react";
import { clubs as clubsData } from "../data/clubs";
import ClubList from "../components/ClubList";
import ViewToggle from "../components/ViewToggle";
import SortDropdown from "../components/SortDropdown";

const sortClubs = (clubs, sort) => {
  const sorted = [...clubs];
  sorted.sort((a, b) =>
    sort === "az"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
  return sorted;
};

const Clubs = ({ joinedClubs, onJoin }) => {
  const [sort, setSort] = useState("az");
  const [view, setView] = useState("grid");

  const sortedClubs = sortClubs(clubsData, sort);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">All Clubs</h2>
        <div className="flex gap-4">
          <SortDropdown sort={sort} setSort={setSort} />
          <ViewToggle view={view} setView={setView} />
        </div>
      </div>
      <ClubList clubs={sortedClubs} joinedClubs={joinedClubs} onJoin={onJoin} view={view} />
    </div>
  );
};

export default Clubs;