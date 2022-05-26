/**
 * This is Navbar component
 */

import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-light.png";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <Loading />;
	}
	return (
		<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					<img src={logo} alt='' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/'>
								<small>Home</small>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/my-profile'>
								<small>My Profile</small>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/blog'>
								<small>Blog</small>
							</Link>
						</li>
						{!user && (
							<li className='nav-item'>
								<Link className='nav-link' to='/login'>
									<small>Login</small>
								</Link>
							</li>
						)}
						{user && (
							<>
								<li className='nav-item'>
									<Link className='nav-link' to='/dashboard'>
										<small>Dashboard</small>
									</Link>
								</li>

								<li
									className='nav-item'
									onClick={() => {
										signOut(auth);
										localStorage.removeItem("accessToken");
									}}>
									<small className='nav-link btn btn-light text-dark'>
										Log Out
									</small>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
