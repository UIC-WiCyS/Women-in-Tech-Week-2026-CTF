import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Scoreboard.module.css";
import { fetch_scoreboard } from '../api/firebase_manager';

export default function Scoreboard({}) {
    const [scores, setScore] = useState([
        { id: "player1", score: 850 },
        { id: "player2", score: 720 }
    ])

    // fetch data
    useEffect(() => {
        // fetch scoreboard
        const fetch_scores = async () => {
            var data = await fetch_scoreboard();
            if (data != null && data.length > 0)
            {
                // update
                setScore(data);
            } else {
                // mock data for testing
                setScore([
                    { id: "player1", score: 850 },
                    { id: "player2", score: 720 }
                ]);
            }
        };

        fetch_scores();
    }, []);

    return (
        <div className={styles.scoreboardContainer}>
            <h1 className={styles.title}>Scoreboard</h1>

            <div className={styles.leaderboard}>
                {scores.map((entry, index) => (
                    <div key={index} className={styles.scoreEntry}>
                        <span className={styles.username}>{entry.id}</span>
                        <span className={styles.points}>{entry.score}</span>
                    </div>
                ))}
            </div>

            {scores.length === 0 && (
                <p className={styles.noScores}>No scores yet. Complete challenges to appear on the leaderboard!</p>
            )}

            {/* <3 */}
            <div className='absolute bottom-0 self-center text-center text-lg text-white text-center justify-self-center font-pixel'>
                <p>Made with <a href="https://github.com/UIC-WiCyS/Women-in-Tech-Week-2026-CTF" target='_blank'>{'<3'}</a> by</p>
                <p>WiCyS & WiCS</p>
            </div>
        </div>
    );
}