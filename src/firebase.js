// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// 1. import
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAKzrQY-Y5Wf8LoOYddlfosPNMpX332z0s",
    authDomain: "resumebuilder-3e643.firebaseapp.com",
    projectId: "resumebuilder-3e643",
    storageBucket: "resumebuilder-3e643.appspot.com",
    messagingSenderId: "552522858254",
    appId: "1:552522858254:web:ee96ec179553f2e3e0a15f"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;


