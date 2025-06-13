import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to Campus Club Finder</h1>
    <p className="mb-6 text-lg max-w-xl">
      Discover, explore, and join student clubs on your campus. Find your community and get involved!
    </p>
    <Link
      to="/clubs"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-lg"
    >
      Browse Clubs
    </Link>
  </div>
);

export default Home;