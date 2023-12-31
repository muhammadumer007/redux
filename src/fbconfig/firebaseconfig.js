// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB38gl-mXlnlVE1yx-MjFa9VWiwqcAqnag",
    authDomain: "quizapp-490cb.firebaseapp.com",
    projectId: "quizapp-490cb",
    storageBucket: "quizapp-490cb.appspot.com",
    messagingSenderId: "966210614352",
    appId: "1:966210614352:web:6c9f14cce0ea8b228e4d55",
    measurementId: "G-VQF58ZBRX3",
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const  analytics = getAnalytics(app);