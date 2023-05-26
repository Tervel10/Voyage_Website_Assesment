// npm install firebase
// npm install -g firebase-tools   Install Firebase CLI
/*Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google
firebase login
Initiate your project
Run this command from your app’s root directory:

firebase init
When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

firebase deploy*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
  authDomain: "fir-auth-1132.firebaseapp.com",
  projectId: "fir-auth-1132",
  storageBucket: "fir-auth-1132.appspot.com",
  messagingSenderId: "1029021654707",
  appId: "1:1029021654707:web:14aa4dee98449061701ac6",
  measurementId: "G-MFP6M081T7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
