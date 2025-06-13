import React from "react";
import ClubCard from "./ClubCard";

const ClubList = ({ clubs, joinedClubs, onJoin, view }) => (
  <div
    className={
      view === "grid"
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        : "flex flex-col gap-4"
    }
  >
    {clubs.map((club) => (
      <ClubCard
        key={club.id}
        club={club}
        joined={joinedClubs.includes(club.id)}
        onJoin={onJoin}
        view={view}
      />
    ))}
  </div>
);

export default ClubList;