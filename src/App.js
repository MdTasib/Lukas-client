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
import AllOrders from "./pages/Dashboard/AllOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import EditProfile from "./pages/Dashboard/EditProfile";

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
					<Route index element={<Profile />} />
					<Route path='/dashboard/review' element={<MyReview />} />
					<Route path='/dashboard/my-order' element={<MyOrders />} />
					<Route path='/dashboard/profile' element={<Profile />} />
					<Route path='/dashboard/edit-profile' element={<EditProfile />} />
					<Route path='/dashboard/all-orders' element={<AllOrders />} />
					<Route path='/dashboard/add-product' element={<AddProduct />} />
					<Route path='/dashboard/manage-product' element={<ManageProduct />} />
					<Route path='/dashboard/make-admin' element={<MakeAdmin />} />
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
