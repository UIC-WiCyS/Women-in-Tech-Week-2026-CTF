import { useState, useEffect } from 'react';
import styles from "./ChallengesOverview.module.css";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeModal from "../components/ChallengeModal";
import { get_all_challenges } from "../api/firebase_manager";

export default function ChallengesOverview({session}) {
    const [challenges, setChallenges] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {    
        // check if session exists
        // fetch completed challenges
        const fetch_challenges = async () => {
            var data = await get_all_challenges();
            if (data != null)
            {
                // update
                setChallenges(data);
            }
        };

        fetch_challenges();
        setCompleted(session.completed);
    }, [session])
    

    return (
        <section className='font-sync'>
            <p>Welcome, {session.id.toUpperCase()}</p>
            <p>Score: {session.score}</p>
            <p>Challenges Overview</p>
            {challenges[0] &&
                <p>{challenges[1].id}</p>
            }
        </section>
    );
}