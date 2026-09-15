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
        <div className='flex flex-col'>
            {/* TODO: make another map to display scores */}
            { scores[0] &&
                <div>
                    <p>{scores[0].id}</p>
                    <p>{scores[0].score}</p>
                </div>
            }

            <h3>Log in to view the challenges</h3>
            <h3>Head back to home: </h3>
            <Link to="/" className="">Home</Link>

            {/* <3 */}
            <div className='absolute bottom-0 self-center text-center text-lg text-white text-center justify-self-center font-pixel'>
                <p>Made with <a href="https://github.com/UIC-WiCyS/Women-in-Tech-Week-2026-CTF" target='_blank'>{'<3'}</a> by</p>
                <p>WiCyS & WiCS</p>
            </div>
        </div>
    );
}