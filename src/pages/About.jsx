import styles from "./About.module.css";
import heart from "../assets/heart.png";
import wicysLogo from "../assets/wicys_logo.webp";
import wicsLogo from "../assets/wics_logo.png";

export default function About() {

    return (
        <div className="about">

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
                <p className={styles.answer}>hduiwahiud iuefhaiue hiuhfau hiual hsauhd usahd 
                    iusadh iusad hiuwakfdkjf  dasdasd asd asd sad sh th rgg hkhk hiu hiu h jhk 
                    iu h khui tbu5b65ecv bo78n bt6nu uybtyuiu  98n y8ym87iu  hkjashf iaksdhkjsadh
                     kjsahdkhka sdas r gadf dsf fweawdadsa
                </p> 
            </section>
        
            {/* <3 */}
            <div className='absolute bottom-0 text-lg text-white text-center justify-self-center font-pixel'>
                <p>Made with <a href="https://github.com/UIC-WiCyS/Women-in-Tech-Week-2026-CTF" target='_blank'>{'<3'}</a> by</p>
                <p>WiCyS & WiCS</p>
            </div>

        </div>
        
    );
}