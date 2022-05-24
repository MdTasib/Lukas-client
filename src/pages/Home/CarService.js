import React from "react";
import carServiceImg from "../../assets/images/bg-car.png";

const CarService = () => {
	return (
		<section className='py-5 bg-light'>
			<div className='container'>
				<div className='text-center w-50 mx-auto'>
					<h3 className='fw-bold'>
						ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE
					</h3>
					<button className='btn btn-dark rounded-pill'>
						<small>SHOP NOW</small>
					</button>
					<img src={carServiceImg} className='w-100 d-block pt-4' alt='' />
				</div>
			</div>
		</section>
	);
};

export default CarService;
