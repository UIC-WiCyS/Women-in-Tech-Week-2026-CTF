import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Scoreboard.module.css";
import { fetch_scoreboard } from '../api/firebase_manager';

export default function Scoreboard({}) {
    const [scores, setScore] = useState([])

    // fetch data
    useEffect(() => {
        // fetch scoreboard
        const fetch_scores = async () => {
            var data = await fetch_scoreboard();
            if (data != null)
            {
                // update
                setScore(data);
            }
        };

        fetch_scores();
    }, []);

    return (
        <div>
            { scores[0] &&
                <div>
                    <p>{scores[0].id}</p>
                    <p>{scores[0].score}</p>
                </div>
            }

            <h3>Log in to view the challenges</h3>
            <h3>Head back to home: </h3>
            <Link to="/" className="">Home</Link>
        </div>
    );
}