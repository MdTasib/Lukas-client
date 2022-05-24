import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";
import background from "../../assets/images/loginbg.jpg";
import workGif from "../../assets/images/login.gif";
import useToken from "../../hooks/useToken";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";

const Singin = () => {
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const location = useLocation();
	const navigate = useNavigate();
	const [token] = useToken(user);

	let from = location.state?.from?.pathname || "/";

	const handleSingup = async event => {
		event.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (password !== confirmPassword) {
			return Swal.fire({
				position: "top-center",
				icon: "warning",
				title: "Password Not Match",
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			await createUserWithEmailAndPassword(email, password);
			await updateProfile({ displayName: name });
		}
	};

	if (loading || updating) {
		return <Loading />;
	}

	if (token) {
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "User Created Successfully",
			showConfirmButton: false,
			timer: 1500,
		});
		navigate(from, { replace: true });
	}

	return (
		<div className=''>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>Sing Up</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ Sing In
				</h6>
			</div>
			<div className='row p-5 rounded container mx-auto align-items-center'>
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
						{(error || updateError) && (
							<small className='text-danger'>
								{error?.message || updateError?.message}
							</small>
						)}
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
					<div className='mt-3'>
						<GoogleLogin />
					</div>
				</div>
				<div className='col-md-6 mt-3 text-end'>
					<img src={workGif} alt='' className='w-100' />
				</div>
			</div>
		</div>
	);
};

export default Singin;
