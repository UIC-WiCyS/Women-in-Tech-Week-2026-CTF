import { useState } from 'react';
import styles from "./Login.module.css";
import { login } from "../api/firebase_manager";
import StartButton from "../assets/start_button.png"
import WICYSLogo from "../assets/wicys_logo.webp"
import WICSLogo from "../assets/wics_logo.png"

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
        <section className="font-pixel text-center flex flex-col justify-center items-center min-h-screen">
            <div className='flex flex-col items-center gap-2 w-11/12'>
                <div className='text-6xl -mt-40'>
                    <h1 className={styles.glitch} data-text="WITW">WITW</h1>
                    <h1 className={styles.glitch} data-text="CTF">CTF</h1>
                </div>

                <div className='bg-[#EAD3FF] border-[#812990] border-8 py-6 px-10 text-[#812990] flex flex-col items-center w-full max-w-lg' style={{boxShadow: '4px 4px 0 #CF9BFF'}}>
                    <p className='text-2xl mb-6'>
                        A Mini-CTF celebrating brilliant women in tech
                        for, WITW 2026 hosted at UIC
                    </p>

                    <form onSubmit={handle_login} className="font-pixel text-[#812990] bg-white border-6 p-3 text-2xl mb-6 w-4/5">
                        <input id={styles.login} onChange={e => setInput(e.target.value)} placeholder="Enter Your Username" className="w-full text-center"/>
                    </form>

                    <div className='flex gap-6 justify-center items-center mb-6'>
                        <img src={WICYSLogo} style={{height: '5rem', width: 'auto', objectFit: "contain"}} />
                        <img src={WICSLogo}  style={{height: '5rem', width: 'auto', objectFit: "contain"}} />
                    </div>

                    <button className='cursor-pointer' onClick={handle_login}>
                        <img src={StartButton} style={{maxWidth: '150px'}}/>
                    </button>
                </div>
            </div>

            {/* <3 */}
            <div className='absolute text-lg text-white justify-self-end bottom-0'>
                <p>Made with <a href="https://github.com/UIC-WiCyS/Women-in-Tech-Week-2026-CTF" target='_blank'>{'<3'}</a> by</p>
                <p>WiCyS & WiCS</p>
            </div>
        </section>
    );
}