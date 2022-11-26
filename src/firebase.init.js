/**
 * Firebase system configuration
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAGLcOgHOJUxcnmCYwc8IFLyNrxCqVvyAc",
	authDomain: "lukas-bd.firebaseapp.com",
	projectId: "lukas-bd",
	storageBucket: "lukas-bd.appspot.com",
	messagingSenderId: "167309211932",
	appId: "1:167309211932:web:085b164af5ad760c2be2d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
