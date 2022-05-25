import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const EditProfile = () => {
	const [user, loading] = useAuthState(auth);
	const { register, handleSubmit, reset } = useForm();

	const {
		data: profile,
		isLoading,
		refetch,
	} = useQuery(["profile", user?.email], () =>
		fetch(
			`https://damp-scrubland-03827.herokuapp.com/userProfile/${user?.email}`,
			{
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		).then(res => res.json())
	);

	const onSubmit = async data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		fetch(
			`https://api.imgbb.com/1/upload?key=eb7bb93d7839539a8bddb41471f7e0da`,
			{
				method: "POST",
				body: formData,
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.success) {
					const img = result.data.url;

					const userProfile = {
						userName: user?.displayName,
						email: user?.email,
						img,
						address: data.address,
						phone: data.phone,
						city: data.city,
					};

					fetch(
						`https://damp-scrubland-03827.herokuapp.com/userProfile/${user?.email}`,
						{
							method: "PUT",
							headers: {
								"content-type": "application/json",
								authorization: `Bearer ${localStorage.getItem("accessToken")}`,
							},
							body: JSON.stringify(userProfile),
						}
					)
						.then(res => res.json())
						.then(data => {
							if (data.acknowledged) {
								Swal.fire({
									position: "top-center",
									icon: "success",
									title: "User Profile Updated Successfully",
									showConfirmButton: false,
									timer: 1500,
								});
							} else {
								Swal.fire({
									position: "top-center",
									icon: "warning",
									title: "Failed To Add User Profile Updated",
									showConfirmButton: false,
									timer: 1500,
								});
							}
							refetch();
							reset();
						});
				}
			});
	};

	if (loading || isLoading) {
		return <Loading />;
	}

	return (
		<div className='row rounded container justify-content-start pb-5'>
			<div className='col-md-10'>
				<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
					Edit Profile
				</h3>
				<small className='d-block'>Insert your profile information:</small>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mt-3 text-end d-flex  flex-column align-items-center justify-content-center'>
						<div
							className='bg-light mx-auto text-black rounded-circle d-flex justify-content-center align-items-center border overflow-hidden'
							style={{ width: "100px", height: "100px" }}>
							{profile?.img ? (
								<img src={profile?.img} className='w-100' alt='avater' />
							) : (
								<small className='fw-bold'>{user?.email.slice(0, 1)}</small>
							)}
						</div>

						<div className='pt-4'>
							<input
								className='form-control form-control'
								id='formFileLg'
								type='file'
								{...register("image", { required: { value: true } })}
							/>
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

					<div className='pb-2'>
						<label htmlFor='inputAddress' className='form-label'>
							Address
						</label>
						<input
							{...register("address", { required: { value: true } })}
							type='text'
							className='form-control'
							id='inputAddress'
							placeholder={profile?.address}
						/>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<label htmlFor='phone' className='form-label'>
								Phone
							</label>
							<input
								{...register("phone", { required: { value: true } })}
								type='phone'
								className='form-control'
								id='phone'
								placeholder={profile?.phone}
							/>
						</div>
						<div className='col-md-6'>
							<label htmlFor='inputCity' className='form-label'>
								City
							</label>
							<input
								{...register("city", { required: { value: true } })}
								type='text'
								className='form-control'
								id='inputCity'
								placeholder={profile?.city}
							/>
						</div>
					</div>

					<button type='submit' className='btn btn-dark mt-2 w-100'>
						SAVE
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProfile;
