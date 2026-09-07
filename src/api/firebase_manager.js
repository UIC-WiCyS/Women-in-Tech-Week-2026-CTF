import { collection, doc, getDoc, setDoc, getDocs, query } from "firebase/firestore";
import { db } from "./firebase_config";

// login
// @param: display_name -- String
// @return: {id: String, completed: [], hints_used: [], score: Int}
export async function login(display_name) {
    try {
        // check if user exists 
        const snap = await getDoc( doc(db, "users", display_name) );
        // if so, login
        if (snap.exists()) {
            return {id: snap.id, ...snap.data()};
        }

        // create new item in users collection if not there
        // case doesn't matter
        else {
            await setDoc(doc(db, "users", display_name.toLowerCase()), {
                completed: [],
                hints_used: [],
                score: 0
            });
            console.log("USER CREATED:", display_name);
            
            // login
            const snap = await getDoc(doc(db, "users", display_name));
            return {id: snap.id, ...snap.data()};
        }
    
    }
    catch (error) {
        console.error("Error creating logging in: ", error);
        return null;
    }
} 

// get all challenges
export async function get_all_challenges() {
    try {
        const snap = await getDocs( collection(db, "challenges") );
        const all_data = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return all_data;
    }
    catch (error) {
        console.error("Error fetching all challenges: ", error);
        return null;
    }
} 

// fetch scoreboard
export async function fetch_scoreboard() {
    // order in decreasing order
    try {
        const snap = await getDocs(collection(db, "users"), orderBy("score", "desc"));
        const all_data = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return all_data;
    }
    catch (error) {
        console.error("Error fetching all users: ", error);
        return null;
    }
} 


// USER FUNCTIONS ====================================

// check answer
export async function check_answer(uuid, challenge_id, user_answer) {
    
} 

// use hint
export async function use_hint(uuid, challenge_id, hint_id) {
    
} 

// logout
export async function logout(uuid) {
    
} 