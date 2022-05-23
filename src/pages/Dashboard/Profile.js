import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const Profile = () => {
	const [user, loading] = useAuthState(auth);
	const handleProfile = event => {};

	if (loading) {
		return <Loading />;
	}

	return (
		<div className=''>
			<div className='row p-5 rounded container justify-content-center'>
				<div className='col-md-6'>
					<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
						Edit Profile
					</h3>
					<small className='d-block'>Insert your profile information:</small>

					<form onSubmit={handleProfile}>
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
							<input type='text' class='form-control' id='inputAddress' />
						</div>
						<div className='row'>
							<div class='col-md-6'>
								<label for='phone' class='form-label'>
									Phone
								</label>
								<input type='phone' class='form-control' id='phone' />
							</div>
							<div class='col-md-6'>
								<label for='inputCity' class='form-label'>
									City
								</label>
								<input type='text' class='form-control' id='inputCity' />
							</div>
						</div>

						<button type='submit' className='btn btn-dark mt-2'>
							SAVE
						</button>
					</form>
				</div>
				<div className='col-md-6 mt-3 text-end d-flex  flex-column align-items-center justify-content-center'>
					<div
						className='bg-light mx-auto text-black rounded-circle d-flex justify-content-center align-items-center border'
						style={{ width: "100px", height: "100px" }}>
						<small className='fw-bold'>{user?.email.slice(0, 1)}</small>
					</div>
					<div className='pt-4'>
						<input
							class='form-control form-control'
							id='formFileLg'
							type='file'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
