import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqQlSjRePH6C0alrm9WTdHOosf_KTptug",
    authDomain: "dashboard-task1.firebaseapp.com",
    projectId: "dashboard-task1",
    storageBucket: "dashboard-task1.firebasestorage.app",
    messagingSenderId: "413761932803",
    appId: "1:413761932803:web:ac9eee527bbe7c6772c836",
    measurementId: "G-PEWZ0C9JE4"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth }; 