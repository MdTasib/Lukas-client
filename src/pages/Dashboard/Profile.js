import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const Profile = () => {
	const [user, loading] = useAuthState(auth);
	const [userProfile, setUserProfile] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/userProfile/${user?.email}`, {
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then(res => res.json())
			.then(data => setUserProfile(data));
	}, [user?.email]);

	console.log(userProfile);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='row rounded container justify-content-start pb-5'>
			<div className='col-md-10'>
				<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
					User Profile
				</h3>

				<form onSubmit={e => e.preventDefault()}>
					<div className='mt-3 text-end d-flex  flex-column align-items-center justify-content-center'>
						<div
							className='bg-light mx-auto text-black rounded-circle d-flex justify-content-center align-items-center border overflow-hidden'
							style={{ width: "100px", height: "100px" }}>
							{userProfile?.img ? (
								<img src={userProfile?.img} alt='' className='w-100' />
							) : (
								<small className='fw-bold'>{user?.email.slice(0, 1)}</small>
							)}
						</div>
					</div>

					<div className='input-group my-3'>
						<input
							type='text'
							className='form-control'
							value={user?.displayName}
							readOnly
						/>
					</div>
					<div className='input-group my-3'>
						<span className='input-group-text'>📧</span>
						<input
							type='email'
							className='form-control'
							value={user?.email}
							readOnly
						/>
					</div>

					<div class='pb-2'>
						<label for='inputAddress' class='form-label'>
							Address
						</label>
						<input
							type='text'
							class='form-control'
							id='inputAddress'
							placeholder={userProfile?.address}
							readOnly
						/>
					</div>
					<div className='row'>
						<div class='col-md-6'>
							<label for='phone' class='form-label'>
								Phone
							</label>
							<input
								type='phone'
								class='form-control'
								id='phone'
								placeholder={userProfile?.phone}
								readOnly
							/>
						</div>
						<div class='col-md-6'>
							<label for='inputCity' class='form-label'>
								City
							</label>
							<input
								type='text'
								class='form-control'
								id='inputCity'
								placeholder={userProfile?.city}
								readOnly
							/>
						</div>
					</div>
				</form>
				<p className='pt-4'>
					Do you want to edit your profile?{" "}
					<b>Please Click EDIT PROFILE Button</b>
				</p>
				<Link
					to='/dashboard/edit-profile'
					className='btn btn-dark text-decoration-none text-dark text-white'>
					GO TO EDIT PROFILE
				</Link>
			</div>
		</div>
	);
};

export default Profile;
