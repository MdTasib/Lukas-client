import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singin from "./pages/Login/Singin";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singin />} />
			</Routes>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
