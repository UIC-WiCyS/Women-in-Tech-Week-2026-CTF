import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export default function Header({logout}) {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/">Challenges</Link>
            <Link to="/scoreboard">Scoreboard</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}