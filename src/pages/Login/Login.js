import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='container'>
			<div className='text-center py-4'>
				<h2>
					<Link className='text-dark text-decoration-none' to='/'>
						Home
					</Link>
					/ Log In
				</h2>
			</div>
			<div className='row bg-light p-5 rounded '>
				<div className='col-md-6'>
					<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
						Log In
					</h3>
					<small className='d-block'>Insert your account information:</small>

					<form>
						<div class='input-group my-3'>
							<span class='input-group-text' id='basic-addon1'>
								📧
							</span>
							<input
								type='email'
								class='form-control'
								placeholder='Email'
								aria-label='Email'
								aria-describedby='basic-addon1'
							/>
						</div>
						<div class='input-group my-3'>
							<span class='input-group-text' id='basic-addon2'>
								🔐
							</span>
							<input
								type='password'
								class='form-control'
								placeholder='Password'
								aria-label='Password'
								aria-describedby='basic-addon2'
							/>
						</div>
						<p>
							<small>
								📧 Forgot your <b>Password ?</b>
							</small>
						</p>
						<p className='m-0'>
							<Link to='/singup' className='text-decoration-none text-dark'>
								If you have an account, Please <b>Register Here</b>
							</Link>
						</p>
						<button type='submit' class='btn btn-dark mt-2'>
							Log in
						</button>
					</form>
				</div>
				<div className='col-md-6 mt-3'>
					<h3>Image</h3>
				</div>
			</div>
		</div>
	);
};

export default Login;
