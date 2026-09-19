import styles from "./About.module.css";
import heart from "../assets/heart.png";
import wicysLogo from "../assets/wicys_logo.webp";
import wicsLogo from "../assets/wics_logo.png";

export default function About() {

    return (
        <div className="about">
            <h1 className={styles.title}>About</h1>    
            <section className={styles.aboutBody}>



                <div className={styles.wicysHeart}>
                    <img src={wicysLogo} className={styles.wicys}/>
                    <img src={heart} className={styles.heart}/>
                </div>

                <div className={styles.wicsHeart}>
                    <img src={wicsLogo} className={styles.wics}/>
                    <img src={heart} className={styles.heart}/>
                </div>


                

                <h1 className={styles.question}>What is </h1>
                <h1 className={styles.question1}> Women in Tech Week?</h1>
                <p className={styles.answer}>
                  Women in Tech Week is a full week of fun and professional events that help students grow, connect, and explore opportunities in tech. WiCS wraps up the week on Friday with our annual scavenger hunt!
                  <br /><br />
                  <a href="https://bit.ly/4xlrYc8" target="_blank" rel="noopener noreferrer">Learn more about all the events happening throughout the week.</a>
                </p> 
                <br />
                <a className={styles.cyberpackLink} href="https://dolomite-milkshake-eae.notion.site/Women-in-Tech-Week-Mini-CTF-3db487455f7b804cac11ee7dbc16d47e?pvs=143" target="_blank">💜Cyberpack🩵</a>
            </section>
        
            

        </div>
        
    );
}