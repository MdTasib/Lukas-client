import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../shared/CustomLink";

const Dashboard = () => {
	return (
		<div className='row container-fluid'>
			<div className='col-md-3 bg-dark'>
				<nav class='navbar navbar-expand-lg'>
					<div class='container flex-column'>
						<p class='navbar-brand text-white'>Dashboard</p>
						<button
							class='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#sidebar'
							aria-controls='sidebar'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon'></span>
						</button>
						<div class='collapse navbar-collapse' id='sidebar'>
							<ul class='navbar-nav flex-column'>
								<li class='nav-item'>
									<CustomLink
										class='nav-link text-white'
										aria-current='page'
										to='/dashboard'>
										<small>MY ORDERS</small>
									</CustomLink>
								</li>
								<li class='nav-item'>
									<CustomLink
										class='nav-link  text-white'
										aria-current='page'
										to='/dashboard/review'>
										<small>ADD REVIEW</small>
									</CustomLink>
								</li>
								<li class='nav-item'>
									<CustomLink
										class='nav-link text-white'
										aria-current='page'
										to='/dashboard/profile'>
										<small>MY PROFILE</small>
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div className='col-md-9 ps-5'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
