import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Singin from "./pages/Login/Singin";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singin />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
