import { useState, useEffect } from 'react';
import styles from "./ChallengeModal.module.css";
import { check_answer } from '../api/firebase_manager';

export default function ChallengeModal({session, challenge}) {
    const [userInput, setInput] = useState("");
    const [isCorrect, setModal] = useState("default");
    
    async function handle_answer_check(event) {
        event.preventDefault(); 
        var success = await check_answer(session.id, challenge.id, userInput);
        if (success)
        {
            setModal("success")
        }
        else
        {
            setModal("fail")    
        }
    }

    return (
        <div>
            <p>HI</p>
            <p>{challenge.name}</p>
            <p>{challenge.prompt}</p>
            <form onSubmit={handle_answer_check}>

                {/* buttons for hints */}

                <input onChange={e => setInput(e.target.value)} placeholder="flame{...}"/>
            </form>
        </div>
    );
}