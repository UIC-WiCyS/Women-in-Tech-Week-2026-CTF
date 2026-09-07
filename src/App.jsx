import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from "./api/firebase_config"
import { login } from "./api/firebase_manager"
import Login from './pages/Login';
import About from './pages/About';
import ChallengesOverview from './pages/ChallengesOverview';
import Scoreboard from './pages/Scoreboard';


function App() {
  const [user, setUser] = useState("temp")


  useEffect(() => {
    
  });

  return (
    <BrowserRouter>
      <Routes>
        { (!user || user=="") &&
          <Route path="/" element={<Login />} />
        }
        {
          user && 
          <Route path="/" element={<ChallengesOverview session={user} />} />
        }
        <Route path="/about" element={<About />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
