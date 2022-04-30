import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD21cSkR5CNwcL0D15AVoNJMCPRq_vukWA",
    authDomain: "inventory-a416f.firebaseapp.com",
    projectId: "inventory-a416f",
    storageBucket: "inventory-a416f.appspot.com",
    messagingSenderId: "720933873971",
    appId: "1:720933873971:web:a347e00029342a814b3646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth