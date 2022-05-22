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
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyReview from "./pages/Dashboard/MyReview";
import Profile from "./pages/Dashboard/Profile";

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
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<MyOrders />} />
					<Route path='/dashboard/review' element={<MyReview />} />
					<Route path='/dashboard/profile' element={<Profile />} />
				</Route>
				<Route path='/blog' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singin />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
