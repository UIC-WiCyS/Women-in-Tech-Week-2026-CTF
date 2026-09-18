import styles from "./ChallengeCard.module.css";

export default function ChallengeCard({onClick, name, points, category, solved}) {

    return (
        <div onClick={onClick} className={styles.challenge}>
            <h1 className={styles.name}> {name} </h1>
            <h1 className={styles.points}> {points}</h1>
            <h1 className={styles.category}> {category}</h1>
        </div>

    );
}