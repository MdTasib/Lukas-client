import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const Singin = () => {
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const handleSingup = async event => {
		event.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (password !== confirmPassword) {
			return console.log("password not match");
		} else {
			await createUserWithEmailAndPassword(email, password);
		}
	};

	if (loading) {
		return <Loading />;
	}

	if (user) {
		console.log(user);
	}

	return (
		<div className='container'>
			<div className='text-center py-4'>
				<h2>
					<Link className='text-dark text-decoration-none' to='/'>
						Home
					</Link>
					/ Sing In
				</h2>
			</div>
			<div className='row bg-light p-5 rounded '>
				<div className='col-md-6'>
					<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
						Sing In
					</h3>
					<small className='d-block'>Insert your account information:</small>

					<form onSubmit={handleSingup}>
						<div className='input-group my-3'>
							<input
								ref={nameRef}
								type='text'
								className='form-control'
								placeholder='Full Name'
								required
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>📧</span>
							<input
								ref={emailRef}
								type='email'
								className='form-control'
								placeholder='Email'
								required
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>🔐</span>
							<input
								ref={passwordRef}
								type='password'
								className='form-control'
								placeholder='Password'
								required
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>🔐</span>
							<input
								ref={confirmPasswordRef}
								type='password'
								className='form-control'
								placeholder='Confirm Password'
								required
							/>
						</div>
						{error && <small>{error.message}</small>}
						<p>
							<small>
								📧 Forgot your <b>Password ?</b>
							</small>
						</p>
						<p className='m-0'>
							<Link to='/login' className='text-decoration-none text-dark'>
								Already have an account ?, please <b>Login</b>
							</Link>
						</p>
						<button type='submit' className='btn btn-dark mt-2'>
							Sign in
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

export default Singin;
