import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB1c0PYITjnoiCpZByo8owy_FdvVQ_fxl0",
	authDomain: "react-todo-app-bd.firebaseapp.com",
	projectId: "react-todo-app-bd",
	storageBucket: "react-todo-app-bd.appspot.com",
	messagingSenderId: "857469957002",
	appId: "1:857469957002:web:6687a9327ab47ef30ace73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
