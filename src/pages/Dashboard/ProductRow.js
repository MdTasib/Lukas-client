import React, { useRef } from "react";
import Swal from "sweetalert2";

const ProductRow = ({ product, index, refetch }) => {
	const productQuantityRef = useRef(0);

	const handleDeleteProduct = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You Delete This Product",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`https://lukas-server.onrender.com/product/${id}`, {
					method: "DELETE",
					headers: {
						authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				})
					.then(res => res.json())
					.then(data => refetch());
				Swal.fire("Deleted!", "Product has been deleted.", "success");
			}
		});
	};

	// update product available quantity on database
	const handleIncrease = (event, id) => {
		event.preventDefault();
		const productQuantity = productQuantityRef.current.value;

		Swal.fire({
			title: "Are you sure?",
			text: "Update This Product Quantity",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, Update it!",
		}).then(result => {
			if (result.isConfirmed) {
				const newQuantity = product.available + Number(productQuantity);
				fetch(`https://lukas-server.onrender.com/product/${id}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ newQuantity }),
				})
					.then(res => res.json())
					.then(data => refetch());
				Swal.fire("Update!", "Quantity has been update.", "success");
			}
		});

		productQuantityRef.current.value = "";
	};

	return (
		<tr key={product._id}>
			<th scope='row'>{index + 1}</th>
			<td>
				<small>{product.name}</small>
			</td>
			<td>
				{product.available === 0 ? (
					<small className='text-danger fw-bold'>NOT STOCK</small>
				) : (
					<small>{product.available}</small>
				)}
			</td>
			<td>
				<form onSubmit={e => handleIncrease(e, product._id)}>
					<div className='col-auto d-flex aling-itmes-center'>
						<input
							ref={productQuantityRef}
							type='number'
							className='form-control w-50'
							placeholder='Quantity'
							required
						/>
						<button
							type='submit'
							className='btn btn-info btn-sm text-white ms-2'>
							<small>UPDATE</small>
						</button>
					</div>
				</form>
			</td>
			<td>
				<button
					onClick={() => handleDeleteProduct(product._id)}
					className='btn btn-sm btn-outline-danger fw-bold'>
					<small>DELETE</small>
				</button>
			</td>
		</tr>
	);
};

export default ProductRow;
