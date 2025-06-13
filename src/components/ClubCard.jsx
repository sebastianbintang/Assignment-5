import React from "react";
import { Link } from "react-router-dom";

const ClubCard = ({ club, joined, onJoin, view }) => (
  <div className={`bg-white rounded-lg shadow p-4 flex ${view === "list" ? "flex-row items-center" : "flex-col items-center"}`}>
    <img
      src={club.image}
      alt={club.name}
      className={`object-cover rounded mb-2 ${view === "list" ? "w-24 h-24 mr-4 mb-0" : "w-32 h-32"}`}
    />
    <div className="flex-1">
      <h2 className="text-xl font-bold">{club.name}</h2>
      <p className="text-gray-600 mb-2">{club.shortDescription}</p>
      <div className="flex gap-2">
        <Link
          to={`/clubs/${club.id}`}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          View Details
        </Link>
        <button
          className={`px-3 py-1 rounded text-sm ${joined ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white`}
          onClick={() => onJoin(club.id)}
          disabled={joined}
        >
          {joined ? "Joined" : "Join"}
        </button>
      </div>
    </div>
  </div>
);

export default ClubCard;