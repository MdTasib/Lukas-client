import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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
					fetch(`https://lukas-server.onrender.com/uploadProduct`, {
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
							Swal.fire({
								position: "top-center",
								icon: "success",
								title: "Successfully upload a new product",
								showConfirmButton: false,
								timer: 1500,
							});
						});
				}
			});
	};

	return (
		<div className='pb-5'>
			<h3>ADD A NEW PRODUCT</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='pb-2'>
					<label htmlFor='name' className='form-label fw-bold'>
						Product Name
					</label>
					<input
						{...register("name", { required: { value: true } })}
						type='text'
						className='form-control'
						id='name'
					/>
				</div>

				<div className='pt-1 pb-3'>
					<label htmlFor='name' className='form-label fw-bold'>
						Product Image
					</label>

					<input
						className='form-control form-control'
						id='formFileLg'
						type='file'
						{...register("image", { required: { value: true } })}
					/>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<div className='pb-2'>
							<label htmlFor='quantity' className='form-label fw-bold'>
								AVAILABLE QUANTITY
							</label>
							<input
								{...register("quantity", { required: { value: true } })}
								type='number'
								className='form-control'
								id='quantity'
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='pb-2'>
							<label htmlFor='price' className='form-label fw-bold'>
								PRICE
							</label>
							<input
								{...register("price", { required: { value: true } })}
								type='number'
								className='form-control'
								id='price'
							/>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<label htmlFor='description' className='form-label'>
							<b>PRODUCT DESCRIPTION</b>
						</label>
						<textarea
							{...register("description", { required: { value: true } })}
							type='text'
							className='form-control'
							id='description'
							rows='5'
						/>
					</div>
				</div>

				<button type='submit' className='btn btn-dark mt-2 w-100'>
					UPLOAD PRODUCT
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
