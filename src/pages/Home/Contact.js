import React from "react";

const Contact = () => {
	return (
		<section className='py-5 m-5'>
			<div className='container bg-white shadow p-5 rounded'>
				<h3 className='text-center fw-bold pb-3 m-0' data-aos='fade-down'>
					CONTACT US
				</h3>
				<form className='row g-3'>
					<div className='col-md-6'>
						<label className='form-label' data-aos='fade-right'>
							First Name
						</label>
						<input type='text' className='form-control' data-aos='fade-right' />
					</div>
					<div className='col-md-6'>
						<label className='form-label' data-aos='fade-left'>
							Last Name
						</label>
						<input type='text' className='form-control' data-aos='fade-left' />
					</div>
					<div className='col-12' data-aos='fade-right'>
						<label className='form-label'>Your Email</label>
						<input type='email' className='form-control' />
					</div>
					<div className='col-12' data-aos='fade-left'>
						<label className='form-label'>Your Message</label>
						<textarea className='form-control' rows='4'></textarea>
					</div>
					<div className='col-12 text-center'>
						<button
							data-aos='fade-up'
							onClick={e => e.preventDefault()}
							className='btn btn-dark'>
							SEND MESSAGE
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
