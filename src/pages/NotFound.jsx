import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="mb-4">Page not found.</p>
    <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Go Home
    </Link>
  </div>
);

export default NotFound;