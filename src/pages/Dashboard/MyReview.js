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

		fetch(`http://localhost:5000/review`, {
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
		<div>
			<h3>This is my review page</h3>
			<form className='py-4' onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register("rating")}
					class='form-select form-select mb-3 w-50'
					aria-label='form-select-lg example'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<div class='mb-3'>
					<label for='review' class='form-label'>
						Example textarea
					</label>
					<textarea
						{...register("review", { required: true })}
						class='form-control'
						id='review'
						rows='3'></textarea>
				</div>
				<input className='btn btn-dark' type='submit' value='REVIEW' />
			</form>
		</div>
	);
};

export default MyReview;
