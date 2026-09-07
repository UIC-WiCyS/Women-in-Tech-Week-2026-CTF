import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from "./api/firebase_config"
import { login } from "./api/firebase_manager"
import Login from './pages/Login';
import About from './pages/About';
import ChallengesOverview from './pages/ChallengesOverview';
import Scoreboard from './pages/Scoreboard';
import NotFound from './pages/NotFound';


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    
  });

  return (
    <BrowserRouter>
      <Routes>
        { (!user || user==[]) &&
          <Route path="/" element={<Login callback={setUser} />} />
        }
        {
          user && 
          <Route path="/" element={<ChallengesOverview session={user} />} />
        }
        <Route path="/about" element={<About />} />
        { user &&
            <Route path="/scoreboard" element={<Scoreboard />} />
        }

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
