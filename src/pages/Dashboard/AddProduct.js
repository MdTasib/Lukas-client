import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
	const { register, handleSubmit, reset } = useForm();

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
				const img = result.data.url;
				const uploadProduct = {
					name: data.name,
					description: data.description,
					perPrice: data.price,
					available: data.quantity,
					orderQuantity: [
						20, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700,
						1000,
					],
					img,
				};

				if (result.success) {
					fetch(`http://localhost:5000/uploadProduct`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
						body: JSON.stringify(uploadProduct),
					})
						.then(res => res.json())
						.then(data => {
							reset();
							toast.success("Successfully upload a new product");
						});
				}
			});
	};

	return (
		<div className='pb-5'>
			<h3>ADD A NEW PRODUCT</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div class='pb-2'>
					<label for='name' class='form-label fw-bold'>
						Product Name
					</label>
					<input
						{...register("name", { required: { value: true } })}
						type='text'
						class='form-control'
						id='name'
					/>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<div class='pb-2'>
							<label for='quantity' class='form-label fw-bold'>
								AVAILABLE QUANTITY
							</label>
							<input
								{...register("quantity", { required: { value: true } })}
								type='number'
								class='form-control'
								id='quantity'
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div class='pb-2'>
							<label for='price' class='form-label fw-bold'>
								PRICE
							</label>
							<input
								{...register("price", { required: { value: true } })}
								type='number'
								class='form-control'
								id='price'
							/>
						</div>
					</div>
				</div>

				<div className='row'>
					<div class='col-md-12'>
						<label for='description' class='form-label'>
							<b>PRODUCT DESCRIPTION</b>
						</label>
						<textarea
							{...register("description", { required: { value: true } })}
							type='text'
							class='form-control'
							id='description'
							rows='5'
						/>
					</div>
				</div>

				<div className='pt-4'>
					<input
						class='form-control form-control'
						id='formFileLg'
						type='file'
						{...register("image", { required: { value: true } })}
					/>
				</div>

				<button type='submit' className='btn btn-dark mt-2 w-100'>
					UPLOAD PRODUCT
				</button>
			</form>
		</div>
	);
};

export default AddProduct;