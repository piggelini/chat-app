import firebaseApp from "./firebase";
import { getDatabase, ref } from "firebase/database";

//Get db
const db = getDatabase();
export { db }