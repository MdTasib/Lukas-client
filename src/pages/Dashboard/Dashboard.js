import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../../shared/CustomLink";
import Loading from "../../shared/Loading";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
	const [user, loading] = useAuthState(auth);
	const [admin] = useAdmin(user);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='row container-fluid'>
			<div className='col-md-3 bg-dark'>
				<nav className='navbar navbar-expand-lg'>
					<div className='container flex-column'>
						<p className='navbar-brand text-white'>Dashboard</p>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#sidebar'
							aria-controls='sidebar'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='sidebar'>
							<ul className='navbar-nav flex-column'>
								{!admin && (
									<>
										<li className='nav-item'>
											<CustomLink
												className='nav-link text-white'
												aria-current='page'
												to='/dashboard/my-order'>
												<small>MY ORDERS</small>
											</CustomLink>
										</li>
										<li className='nav-item'>
											<CustomLink
												className='nav-link  text-white'
												aria-current='page'
												to='/dashboard/review'>
												<small>ADD REVIEW</small>
											</CustomLink>
										</li>
									</>
								)}
								<li className='nav-item'>
									<CustomLink
										className='nav-link text-white'
										aria-current='page'
										to='/dashboard/profile'>
										<small>MY PROFILE</small>
									</CustomLink>
								</li>
								{admin && (
									<>
										<li className='nav-item'>
											<CustomLink
												className='nav-link text-white'
												aria-current='page'
												to='/dashboard/all-orders'>
												<small>ALL ORDERS</small>
											</CustomLink>
										</li>
										<li className='nav-item'>
											<CustomLink
												className='nav-link text-white'
												aria-current='page'
												to='/dashboard/manage-product'>
												<small>MANAGE PRODUCT</small>
											</CustomLink>
										</li>
										<li className='nav-item'>
											<CustomLink
												className='nav-link text-white'
												aria-current='page'
												to='/dashboard/add-product'>
												<small>ADD PRODUCT</small>
											</CustomLink>
										</li>
										<li className='nav-item'>
											<CustomLink
												className='nav-link text-white'
												aria-current='page'
												to='/dashboard/make-admin'>
												<small>NEW ADMIN</small>
											</CustomLink>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div className='col-md-9 ps-5 pt-4'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
