import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { db } from "./api/firebase_config"
import { login } from "./api/firebase_manager"
import Header from './components/Header';
import Login from './pages/Login';
import About from './pages/About';
import ChallengesOverview from './pages/ChallengesOverview';
import Scoreboard from './pages/Scoreboard';
import NotFound from './pages/NotFound';


function App() {
    const [user, setUser] = useState(null);


    useEffect(() => {
        
    });

  
    async function handle_logout() {
        setUser(null);
    }


    return (
        <BrowserRouter>
            { user &&
                <Header logout={handle_logout} />
            }

            <Routes>
                { (!user || user==[]) &&
                <Route path="/" element={<Login callback={setUser} />} />
                }
                {
                user && 
                <Route path="/" element={<ChallengesOverview session={user} />} />
                }
                <Route path="/about" element={<About />} />
                <Route path="/scoreboard" element={<Scoreboard />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
