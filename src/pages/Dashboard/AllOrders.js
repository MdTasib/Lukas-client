import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import OrderRow from "./OrderRow";

const AllOrders = () => {
	const {
		data: allOrders,
		isLoading,
		refetch,
	} = useQuery("allOrders", () =>
		fetch("https://damp-scrubland-03827.herokuapp.com/purchases", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h3>ALL ORDERS</h3>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>SR</th>
						<th scope='col'>Customer</th>
						<th scope='col'>Product</th>
						<th scope='col'>Stutas</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{allOrders?.map((order, index) => (
						<OrderRow
							key={order._id}
							order={order}
							index={index}
							refetch={refetch}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllOrders;
