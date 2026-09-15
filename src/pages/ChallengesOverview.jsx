import { useState, useEffect } from 'react';
import styles from "./ChallengesOverview.module.css";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeModal from "../components/ChallengeModal";
import { get_all_challenges } from "../api/firebase_manager";

export default function ChallengesOverview({session}) {
    const [challenges, setChallenges] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [openModal, setModal] = useState(false);

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
        <section className='font-sync text-white'>
            <p>Welcome, {session.id.toUpperCase()}</p>
            <p>Score: {session.score}</p>
            <p>Challenges Overview</p>
            {/* TODO: create a map here */}
            {/* replace the [0] with the index of the map element */}
            { challenges[0] &&
                <ChallengeCard name={challenges[0].name} points={challenges[0].points} category={challenges[0].category} solved={true}/>
            }
                {/* // if a challenge is clicked on, set setmodal to true */}
                {challenges[0] && openModal &&
                    <ChallengeModal session={session} challenge={challenges[0]} />
                }
            
        </section>
    );
}