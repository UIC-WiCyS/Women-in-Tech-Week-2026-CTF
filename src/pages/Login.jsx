import { useState } from 'react';
import styles from "./Login.module.css";
import { login } from "../api/firebase_manager";

export default function Login({callback}) {
    const [input, setInput] = useState("");

    async function handle_login(event) {
        event.preventDefault(); 
        var data = await login(input);
        if (data != null)
        {
            callback(data);
        }
    }

    return (
        <section className="font-sync">
            <form onSubmit={handle_login}>
                <input id={styles.login} onChange={e => setInput(e.target.value)} placeholder="Enter Your Username"/>
            </form>
        </section>
    );
}