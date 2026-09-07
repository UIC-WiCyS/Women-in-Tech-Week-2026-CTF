import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase_config"


// login
export async function login(display_name) {
    try {
        // check if user exists
        if (true) {

        }

        // create new item in users collection if not there
        // case doesn't matter
        else {
            await setDoc(doc(db, "names", display_name.toLowerCase()), {
                completed: [],
                hints_used: [],
                score: 0
            });
            console.log("USER CREATED");
        }
    
        // login
        
    }
    catch (error) {
        console.error("Error creating new user: ", error);
    }
} 

// get all challenges
export async function get_all_challenges() {
    
} 

// fetch scoreboard
export async function fetch_scoreboard() {
    // order in decreasing order
} 


// USER FUNCTIONS ====================================

// get completed challenges
export async function get_completed(uuid) {
    
} 

// get used hints
export async function get_used_hints(uuid) {
    
} 

// check answer
export async function check_answer(uuid, challenge_id, user_answer) {
    
} 

// use hint
export async function use_hint(uuid, challenge_id, hint_id) {
    
} 

// logout
export async function logout(uuid) {
    
} 