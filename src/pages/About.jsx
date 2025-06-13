import React from "react";

const About = () => (
  <div className="max-w-xl mx-auto mt-10 p-4">
    <h2 className="text-2xl font-bold mb-2">About Campus Club Finder</h2>
    <p className="mb-4">
      Campus Club Finder is a platform designed to help students easily discover, explore, and join a wide variety of clubs and organizations on their campus. Whether you’re looking to pursue your passions, develop new skills, or connect with like-minded peers, Campus Club Finder makes it simple to browse club profiles.
    </p>
    <h3 className="text-lg font-semibold mb-1">Tech Stack:</h3>
    <ul className="list-disc list-inside">
      <li>React (functional components & hooks)</li>
      <li>React Router</li>
      <li>Tailwind CSS</li>
      <li>LocalStorage for persistence</li>
    </ul>
  </div>
);

export default About;