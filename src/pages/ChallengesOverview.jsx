import { useState, useEffect } from 'react';
import styles from "./ChallengesOverview.module.css";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeModal from "../components/ChallengeModal";
import { get_all_challenges } from "../api/firebase_manager";

import img1 from "../assets/animalsChallenges/Cat_2.png";
import img3 from "../assets/animalsChallenges/Dog_1.png";
import img5 from "../assets/animalsChallenges/Duck.png";
import img8 from "../assets/animalsChallenges/Golden_Chicken.png";
import img6 from "../assets/animalsChallenges/Rabbit.png";
import img4 from "../assets/animalsChallenges/Raccoon.png";
import img7 from "../assets/animalsChallenges/Turtle.png";
import img2 from "../assets/animalsChallenges/White_Chicken.png";

const imageMap = {
    "1": img1,
    "2": img2,
    "3": img3,
    "4": img4,
    "5": img5,
    "6": img6,
    "7": img7,
    "8": img8
};

export default function ChallengesOverview({session}) {
    const [challenges, setChallenges] = useState([]);
    
    //const [completed, setCompleted] = useState([]);
    const [completed, setCompleted] = useState(["1"]);  //remove- just for testing
    const [openModal, setModal] = useState(false); 
    const [selectedChallenge, setSelectedChallenge] = useState(null);

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
        <section className='font-sync text-white' style={{height: "75vh"}}>
            <div className={styles.header}> 
                <p className='text-left'>Welcome, {session.id.toUpperCase()}</p>
                <h1 className={styles.title}>Challenges Overview</h1>
                <p className='text-right'>Score: {session.score}</p>
            </div>
            
            <div className={styles.challengeMap}> 
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} name={challenge.name} points={challenge.points} category={challenge.category} 
                    solved={completed.some(id => String(id) === String(challenge.id))} solvedImg={challenge.solvedImg}  
                    //Todo: add the lock function
                    onClick={() => {
                        setSelectedChallenge(challenge);
                        setModal(true);
                    }}
                
                    />
            
                ))}
            </div>
            
            {/*check the boolean state && check there is a selected challenge && get the challenge*/}
            {openModal && selectedChallenge && (
                <ChallengeModal session={session} challenge={selectedChallenge} callback={setModal} />
            )}
        </section>
    );
}