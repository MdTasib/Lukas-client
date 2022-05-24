import React from "react";
import weels from "../../assets/images/wheels.png";
import background from "../../assets/images/deal-bg.jpg";

const Discount = () => {
	return (
		<section className='py-5' style={{ backgroundImage: `url(${background})` }}>
			<div className='container'>
				<div className='row justify-content-center align-items-center'>
					<div className='col-md-6 text-center'>
						<img src={weels} className='w-75' alt='' />
					</div>
					<div className='col-md-6 text-center pt-3'>
						<h4 className='fw-bold'>FLASH DEALS</h4>
						<h5 className='fw-bold py-1'>HURRY UP AND GET 25% DISCOUNT</h5>
						<button className='btn btn-dark rounded-pill'>
							<small>SHOP NOW</small>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discount;
