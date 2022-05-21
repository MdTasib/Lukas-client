import React from "react";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";

const Banner = () => {
	return (
		<div
			id='carouselExampleCaptions'
			className='carousel slide'
			data-bs-ride='false'>
			<div className='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to='0'
					className='active'
					aria-current='true'
					aria-label='Slide 1'></button>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to='1'
					aria-label='Slide 2'></button>
			</div>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src={slider1} className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h5>NEW TECHNOLOGY & BUILD</h5>
						<h2 className='fs-1'>WHEELS & TIRES COLLECTIONS</h2>
						<button className='btn btn-outline-light rounded-pill'>
							<small>SHOP NOW</small>
						</button>
					</div>
				</div>
				<div className='carousel-item'>
					<img src={slider2} className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h5>NEW TECHNOLOGY & BUILD</h5>
						<h2 className='fs-1'>LATEST & POWERFUL ENGINE FOR YOU</h2>
						<button className='btn btn-outline-light rounded-pill'>
							<small>SHOP NOW</small>
						</button>
					</div>
				</div>
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default Banner;
