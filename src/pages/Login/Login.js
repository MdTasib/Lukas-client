import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import background from "../../assets/images/loginbg.jpg";
import workGif from "../../assets/images/work.gif";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../../shared/Loading";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const location = useLocation();
	const navigate = useNavigate();
	const [token] = useToken(user);

	let from = location.state?.from?.pathname || "/";

	const handleLogin = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		await signInWithEmailAndPassword(email, password);
	};

	if (loading) {
		return <Loading />;
	}

	if (error) {
		Swal.fire({
			position: "top-center",
			icon: "warning",
			title: `${error?.message}`,
			showConfirmButton: false,
			timer: 1500,
		});
	}

	if (token) {
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "User Login Successfull",
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
				<h2 className='pb-3'>Log In</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ Log In
				</h6>
			</div>
			<div className='row p-5 rounded container mx-auto'>
				<div className='col-md-6'>
					<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
						Log In
					</h3>
					<small className='d-block'>Insert your account information:</small>

					<form onSubmit={handleLogin}>
						<div className='input-group my-3'>
							<span className='input-group-text' id='basic-addon1'>
								📧
							</span>
							<input
								ref={emailRef}
								type='email'
								className='form-control'
								placeholder='Email'
								aria-label='Email'
								aria-describedby='basic-addon1'
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text' id='basic-addon2'>
								🔐
							</span>
							<input
								ref={passwordRef}
								type='password'
								className='form-control'
								placeholder='Password'
								aria-label='Password'
								aria-describedby='basic-addon2'
							/>
						</div>
						{error && <small className='text-danger'>{error?.message}</small>}
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
						<button type='submit' className='btn btn-dark mt-2'>
							Log in
						</button>
					</form>
				</div>
				<div className='col-md-6 mt-3'>
					<img src={workGif} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Login;
