// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDG7ZcBYp-WoUQzd42yzX1iYZvq6D8i-ao",
	authDomain: "assignment-39ab1.firebaseapp.com",
	projectId: "assignment-39ab1",
	storageBucket: "assignment-39ab1.appspot.com",
	messagingSenderId: "4467783133",
	appId: "1:4467783133:web:d59ba40473196c07907234",
	measurementId: "G-13YRXN4K2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default initializeApp(firebaseConfig);
