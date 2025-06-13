import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const LOCAL_STORAGE_KEY = "joinedClubs";

function App() {
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setJoinedClubs(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  const handleJoin = (clubId) => {
    if (!joinedClubs.includes(clubId)) {
      setJoinedClubs([...joinedClubs, clubId]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs joinedClubs={joinedClubs} onJoin={handleJoin} />} />
        <Route path="/clubs/:clubId" element={<ClubDetail joinedClubs={joinedClubs} onJoin={handleJoin} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;