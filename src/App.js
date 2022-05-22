import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singin from "./pages/Login/Singin";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import RequireAuth from "./pages/Login/RequireAuth";
import Purchase from "./pages/Purchase/Purchase";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route
					path='/about'
					element={
						<RequireAuth>
							<About />
						</RequireAuth>
					}
				/>
				<Route
					path='/purchase/:id'
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}
				/>
				<Route path='/blog' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singin />} />
			</Routes>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
