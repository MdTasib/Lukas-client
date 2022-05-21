import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <Loading />;
	}

	if (user) {
		console.log(user);
	}

	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-fluid'>
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
							<Link className='nav-link' to='/about'>
								<small>About</small>
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
							<li className='nav-item' onClick={() => signOut(auth)}>
								<small className='nav-link btn btn-dark text-white'>
									Log Out
								</small>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
