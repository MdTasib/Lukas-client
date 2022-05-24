import React from "react";

const OrderRow = ({ order, index }) => {
	return (
		<tr key={order._id}>
			<th scope='row'>{index + 1}</th>
			<td>{order.userEmail}</td>
			<td>{order.name}</td>
			<td>
				<button className='btn btn-sm btn-outline-danger fw-bold'>
					PENDING
				</button>
				<button className='btn btn-sm btn-outline-dark mx-2 fw-bold'>
					UNPAID
				</button>
				<button className='btn btn-sm btn-outline-success fw-bold'>
					SHIPPED
				</button>
			</td>
		</tr>
	);
};

export default OrderRow;
