import React from "react";
import googleIcon from "../../assets/icon/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";
import useToken from "../../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();
	const location = useLocation();
	const [token] = useToken(user);

	const from = location.state?.from?.pathname || "/";

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
		navigate(from, { replace: true });
	}

	return (
		<button
			onClick={() => signInWithGoogle()}
			className='btn btn-outline-warning'>
			<img src={googleIcon} alt='' width={25} /> CONTINUE WITH GOOGLE
		</button>
	);
};

export default GoogleLogin;
