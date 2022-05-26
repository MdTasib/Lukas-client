import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import RequireAuth from "./pages/Login/RequireAuth";
import Purchase from "./pages/Purchase/Purchase";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import RequireAdmin from "./pages/Dashboard/RequireAdmin";
import { publicRoutes } from "./Routes/publicRoutes";
import { dashboardRoutes } from "./Routes/dashboardRoutes";
import { adminRoutes } from "./Routes/adminRoutes";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				{/* purchase page route */}
				<Route
					path='/purchase/:id'
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}
				/>

				{/* dashbord routes */}
				<Route
					path='/dashboard'
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}>
					<Route index element={<Profile />} />
					{dashboardRoutes.map(({ path, Component }, index) => (
						<Route key={index} path={path} element={<Component />} />
					))}

					{/* admin routes */}
					{adminRoutes.map(({ path, Component }, index) => (
						<Route
							key={index}
							path={path}
							element={
								<RequireAdmin>
									<Component />
								</RequireAdmin>
							}
						/>
					))}
				</Route>

				{/* public routes */}
				{publicRoutes.map(({ path, Component }, index) => (
					<Route key={index} path={path} element={<Component />} />
				))}
			</Routes>
			<Footer />
			<Toaster />
		</>
	);
}

export default App;
