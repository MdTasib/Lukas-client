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
				fetch(`https://lukas-backend.vercel.app/purcahses/${id}`, {
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

	// update purchase product status
	const handleShipped = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You Shipped This Product",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, shipped it!",
		}).then(result => {
			if (result.isConfirmed) {
				const shippedProduct = {
					...order,
					status: "shipped",
				};

				fetch(`https://lukas-backend.vercel.app/purchases/${id}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json",
						authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
					body: JSON.stringify(shippedProduct),
				})
					.then(res => res.json())
					.then(data => refetch());
				Swal.fire("Shipped!", "Product has been shipped.", "success");
			}
		});
	};

	const handlePending = () => {
		Swal.fire(
			"Order is pending",
			"Shipped this order? Click Shipped button",
			"question"
		);
	};

	return (
		<tr key={order._id}>
			<th scope='row'>{index + 1}</th>
			<td>
				<small>{order.userEmail}</small>
			</td>
			<td>
				<small>{order.name}</small>
			</td>
			<td>
				{order.status === "pending" && (
					<button
						onClick={handlePending}
						className='btn btn-sm btn-outline-info fw-bold me-2'>
						<small>PENDING...</small>
					</button>
				)}
				{(order.status === "pending" || order.status === "shipped") && (
					<button
						onClick={() => handleShipped(order._id)}
						disabled={order.status === "shipped"}
						className='btn btn-sm btn-outline-success fw-bold'>
						<small>SHIPPED</small>
					</button>
				)}
				{!order.paid && (
					<button className='btn btn-sm btn-outline-dark fw-bold'>
						<small>UNPAID</small>
					</button>
				)}
			</td>
			<td>
				<button
					disabled={order.paid}
					onClick={() => handleDelete(order._id)}
					className='btn btn-sm btn-outline-danger fw-bold me-2'>
					<small>DELETE</small>
				</button>
			</td>
		</tr>
	);
};

export default OrderRow;
