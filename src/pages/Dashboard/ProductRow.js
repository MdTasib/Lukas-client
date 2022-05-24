import React from "react";
import Swal from "sweetalert2";

const ProductRow = ({ product, index, refetch }) => {
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
				fetch(`http://localhost:5000/product/${id}`, {
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

	return (
		<tr key={product._id}>
			<th scope='row'>{index + 1}</th>
			<td>{product.name}</td>
			<td>
				{product.available === 0 ? (
					<small className='text-danger fw-bold'>NOT STOCK</small>
				) : (
					product.available
				)}
			</td>
			<td>
				<button
					onClick={() => handleDeleteProduct(product._id)}
					className='btn btn-sm btn-outline-danger fw-bold'>
					DELETE
				</button>
			</td>
		</tr>
	);
};

export default ProductRow;
