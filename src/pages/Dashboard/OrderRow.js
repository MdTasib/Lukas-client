import React from "react";
import Swal from "sweetalert2";

const OrderRow = ({ order, index, refetch }) => {
	const handleDelete = id => {
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
				fetch(`http://localhost:5000/purcahses/${id}`, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
						authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				})
					.then(res => res.json())
					.then(data => {
						refetch();
					});
				Swal.fire("Deleted!", "Product has been deleted.", "success");
			}
		});
	};

	const handleShipped = id => {
		console.log(order);
	};

	return (
		<tr key={order._id}>
			<th scope='row'>{index + 1}</th>
			<td>{order.userEmail}</td>
			<td>{order.name}</td>
			<td>
				{order.paid ? (
					<>
						<button className='btn btn-sm btn-outline-info fw-bold me-2'>
							PENDING...
						</button>
						<button
							onClick={() => handleShipped(order._id)}
							className='btn btn-sm btn-outline-success fw-bold'>
							SHIPPED
						</button>
					</>
				) : (
					<button className='btn btn-sm btn-outline-dark fw-bold'>
						UNPAID
					</button>
				)}
			</td>
			<td>
				<button
					disabled={order.paid}
					onClick={() => handleDelete(order._id)}
					className='btn btn-sm btn-outline-danger fw-bold me-2'>
					DELETE
				</button>
			</td>
		</tr>
	);
};

export default OrderRow;
