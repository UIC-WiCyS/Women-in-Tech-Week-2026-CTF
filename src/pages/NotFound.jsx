import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center h-[100vh] font-sync gap-3 text-white">
            <h1 className="text-8xl">404</h1>
            <h1 className="text-8xl">Not Found.</h1>
            <h3>You found a secret! Here, have a cookie 🍪</h3>
            <h3>Log in to view the challenges</h3>
            <h3>Head back to home: </h3>
            <Link to="/" className="">Home</Link>
        </section>
    )
}