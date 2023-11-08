import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAA-ASq8iegkHdgAJn73hw738CheHmCEiQ",
	authDomain: "simple-firebase-ddc17.firebaseapp.com",
	projectId: "simple-firebase-ddc17",
	storageBucket: "simple-firebase-ddc17.appspot.com",
	messagingSenderId: "393180211227",
	appId: "1:393180211227:web:6a360dbbc80a655aa870be",
	measurementId: "G-12C35G8C4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
