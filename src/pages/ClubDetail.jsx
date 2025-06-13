import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { clubs } from "../data/clubs";

const ClubDetail = ({ joinedClubs, onJoin }) => {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);

  if (!club) return <Navigate to="/404" />;

  const joined = joinedClubs.includes(club.id);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold mb-2">{club.name}</h2>
      <p className="mb-4">{club.description}</p>
      {!joined ? (
        <button
          className="mb-4 px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
          onClick={() => onJoin(club.id)}
        >
          Join Club
        </button>
      ) : (
        <div className="mb-4 px-4 py-2 rounded bg-gray-200 text-green-700 font-semibold">
          You have joined this club!
        </div>
      )}
      <h3 className="text-xl font-semibold mt-6 mb-2">Upcoming Events</h3>
      <ul>
        {club.events.map((event, idx) => (
          <li key={idx} className="mb-1">
            <span className="font-medium">{event.name}</span> – <span className="text-gray-600">{event.date}</span>
          </li>
        ))}
      </ul>
      <Link to="/clubs" className="inline-block mt-6 text-blue-600 underline">
        &larr; Back to Clubs
      </Link>
    </div>
  );
};

export default ClubDetail;