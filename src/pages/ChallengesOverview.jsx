import { useState, useEffect } from 'react';
import styles from "./ChallengesOverview.module.css";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeModal from "../components/ChallengeModal";
import { get_all_challenges } from "../api/firebase_manager";

export default function ChallengesOverview({session}) {
    const [challenges, setChallenges] = useState([
        { id: "1", name: "Ada’s Secret Note", category: "x", points: 100, prompt: "xxx..." },
        { id: "2", name: "Centaur Coordinates", category: "x", points: 125, prompt: "xxx..." },
        { id: "3", name: "Hidden Frequency", category: "x", points: 100, prompt: "xxx..." },
        { id: "4", name: "WiCyS Steganography/XOR", category: "x", points: 150, prompt: "xxx..." },
        { id: "5", name: "Karen Spärck Jones", category: "x", points: 125, prompt: "xxx..." },
        { id: "6", name: "Hidden Coordinates", category: "x", points: 125, prompt: "xxx..." },
        { id: "7", name: "Katherine’s Launch Code", category: "x", points: 125, prompt: "xxx..." },
        { id: "8", name: "Model Verification", category: "x", points: 150, prompt: "xxx..." }
    ]);
    const [completed, setCompleted] = useState([]);
    //starts as false and later true once clicked
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
            <p>Welcome, {session.id.toUpperCase()}</p>
            <p>Score: {session.score}</p>
            <p>Challenges Overview</p>
            {/* TODO: create a map here */}
            {/* replace the [0] with the index of the map element */}
            
            <div className={styles.challengeMap}> 
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} name={challenge.name} points={challenge.points} category={challenge.category} solved={completed.includes(challenge.id)
                }  
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