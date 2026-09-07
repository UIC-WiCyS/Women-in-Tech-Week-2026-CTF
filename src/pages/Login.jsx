import { useState } from 'react';
import styles from "./Login.module.css";

export default function Login() {

    function handle_login() {
        
    }

    return (
        <section>
            <form>
                <input id={styles.login} placeholder="Enter Your Username" />
            </form>
        </section>
    );
}