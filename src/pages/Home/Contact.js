import React from "react";

const Contact = () => {
	return (
		<section className='py-5 m-5'>
			<div className='container bg-white shadow p-5 rounded'>
				<h3 className='text-center fw-bold pb-3 m-0'>CONTACT US</h3>
				<form className='row g-3'>
					<div className='col-md-6'>
						<label className='form-label'>First Name</label>
						<input type='text' className='form-control' />
					</div>
					<div className='col-md-6'>
						<label className='form-label'>Last Name</label>
						<input type='text' className='form-control' />
					</div>
					<div className='col-12'>
						<label className='form-label'>Your Email</label>
						<input type='email' className='form-control' />
					</div>
					<div className='col-12'>
						<label className='form-label'>Your Message</label>
						<textarea className='form-control' rows='4'></textarea>
					</div>
					<div className='col-12 text-center'>
						<button onClick={e => e.preventDefault()} className='btn btn-dark'>
							SEND MESSAGE
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
