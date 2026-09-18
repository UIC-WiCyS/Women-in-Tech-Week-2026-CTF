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
    const [challenges, setChallenges] = useState([
        { id: "1", name: "Ada’s Secret Note", category: "x", points: 100, prompt: "xxx...", solvedImg: img1 },
        { id: "2", name: "Centaur Coordinates", category: "x", points: 125, prompt: "xxx...", solvedImg: img2 },
        { id: "3", name: "Hidden Frequency", category: "x", points: 100, prompt: "xxx...", solvedImg: img3 },
        { id: "4", name: "WiCyS Steganography/ XOR", category: "x", points: 150, prompt: "xxx...", solvedImg: img4 },
        { id: "5", name: "Karen Spärck Jones", category: "x", points: 125, prompt: "xxx...", solvedImg: img5 },
        { id: "6", name: "Hidden Coordinates", category: "x", points: 125, prompt: "xxx...", solvedImg: img6 },
        { id: "7", name: "Katherine’s Launch Code", category: "x", points: 125, prompt: "xxx...", solvedImg: img7 },
        { id: "8", name: "Model Verification", category: "x", points: 150, prompt: "xxx...", solvedImg: img8 }
    ]);
    
    //const [completed, setCompleted] = useState([]);
    const [completed, setCompleted] = useState(["1"]);  //remove- just for testing
    const [openModal, setModal] = useState(false); 
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    useEffect(() => {    
        // check if session exists
        // fetch completed challenges
        const fetch_challenges = async () => {
            var data = await get_all_challenges();
            console.log("testing this:", data);
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
            <div className={styles.header}> 
                <p>Welcome, {session.id.toUpperCase()}</p>
                <p>Score: {session.score}</p>
            </div>
            {/*<p>Challenges Overview</p>*/}
            {/* TODO: create a map here */}
            {/* replace the [0] with the index of the map element */}
            
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
            {openModal && selectedChallenge &&(
                <div className={styles.overview}>
                    <div className={styles.singleChallenge}>
                        <ChallengeModal session={session} challenge={selectedChallenge} />
                    <button onClick={() => setModal(false)} className={styles.close}>Close</button>
        </div>
    </div>
               
            )}
            
            {/* <3 */}
            
            <div className='absolute bottom-0 text-lg text-white text-center justify-self-center font-pixel'>
                <p>Made with <a href="https://github.com/UIC-WiCyS/Women-in-Tech-Week-2026-CTF" target='_blank'>{'<3'}</a> by</p>
                <p>WiCyS & WiCS</p>
            </div>
        </section>
    );
}