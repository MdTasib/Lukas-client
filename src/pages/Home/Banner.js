import React from "react";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";

const Banner = () => {
	return (
		<div
			id='carouselExampleCaptions'
			class='carousel slide'
			data-bs-ride='false'>
			<div class='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to='0'
					class='active'
					aria-current='true'
					aria-label='Slide 1'></button>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to='1'
					aria-label='Slide 2'></button>
			</div>
			<div class='carousel-inner'>
				<div class='carousel-item active'>
					<img src={slider1} class='d-block w-100' alt='...' />
					<div class='carousel-caption d-none d-md-block'>
						<h5>NEW TECHNOLOGY & BUILD</h5>
						<h2 className='fs-1'>WHEELS & TIRES COLLECTIONS</h2>
						<button className='btn btn-secondary rounded-pill'>
							<small>SHOP NOW</small>
						</button>
					</div>
				</div>
				<div class='carousel-item'>
					<img src={slider2} class='d-block w-100' alt='...' />
					<div class='carousel-caption d-none d-md-block'>
						<h5>NEW TECHNOLOGY & BUILD</h5>
						<h2 className='fs-1'>LATEST & POWERFUL ENGINE FOR YOU</h2>
						<button className='btn btn-secondary rounded-pill'>
							<small>SHOP NOW</small>
						</button>
					</div>
				</div>
			</div>
			<button
				class='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='prev'>
				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Previous</span>
			</button>
			<button
				class='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='next'>
				<span class='carousel-control-next-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default Banner;
