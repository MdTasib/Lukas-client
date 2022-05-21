import React from "react";

const Footer = () => {
	return (
		<div className='bg-black py-5 text-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						{/* <img src={logo} alt='' height='50' /> */}
						<p className='pt-4'>
							Copyright &copy; {new Date().getFullYear()} Online Photography
						</p>
					</div>
					<div className='col-md-3'></div>
					<div className='col-md-3'>
						<ul className='list-unstyled'>
							<li>
								<small>About Online Photography</small>
							</li>
							<li>
								<small>Read Out Photography</small>
							</li>
							<li>
								<small>Sing Up To Deliver</small>
							</li>
							<li>
								<small>Add Your Photo</small>
							</li>
						</ul>
					</div>
					<div className='col-md-3'>
						<ul className='list-unstyled'>
							<li>
								<small>Get Help</small>
							</li>
							<li>
								<small>Read FQAs</small>
							</li>
							<li>
								<small>View All Clints</small>
							</li>
							<li>
								<small>Photography</small>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
