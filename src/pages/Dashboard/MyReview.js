import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const MyReview = () => {
	const [user, loading] = useAuthState(auth);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = data => {
		const reviewData = {
			review: data.review,
			rating: data.rating,
			userName: user?.displayName,
			userEmail: user?.email,
			date: new Date().toDateString(),
		};

		fetch(`https://damp-scrubland-03827.herokuapp.com/review`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify(reviewData),
		})
			.then(res => res.json())
			.then(data => {
				reset();
				toast.success("Successfully Added Review");
			});
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<h3>PLEASE, GIVE YOUR REVIEW</h3>
			<form className='py-4' onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register("rating")}
					className='form-select form-select mb-3 w-75'
					aria-label='form-select-lg example'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<div className='mb-3'>
					<label htmlFor='review' className='form-label'>
						Example textarea
					</label>
					<textarea
						{...register("review", { required: true })}
						className='form-control w-75'
						id='review'
						rows='4'></textarea>
				</div>
				<input className='btn btn-dark' type='submit' value='REVIEW' />
			</form>
		</>
	);
};

export default MyReview;
