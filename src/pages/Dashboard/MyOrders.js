import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";
import Swal from "sweetalert2";

const MyOrders = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	const {
		data: purcahsesOrder,
		isLoading,
		refetch,
	} = useQuery(["purcahsesOrder", user?.email], () =>
		fetch(`http://localhost:5000/purcahses?email=${user?.email}`, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then(res => {
			if (res.status === 401 || res.status === 403) {
				signOut(auth);
				localStorage.removeItem("accessToken");
				navigate("/");
			}
			return res.json();
		})
	);

	const handleDelete = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You Delete This Product",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
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
				Swal.fire("Deleted!", "Doctor has been deleted.", "success");
			}
		});
	};

	if (loading || isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h3>YOUR ORDERS</h3>
			<table class='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>SR</th>
						<th scope='col'>Name</th>
						<th scope='col'>Product</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Order</th>
					</tr>
				</thead>
				<tbody>
					{purcahsesOrder?.map((order, index) => (
						<tr key={order._id}>
							<th scope='row'>{index + 1}</th>
							<td>{order.userName}</td>
							<td>{order.name}</td>
							<td>{order.productQuantity}</td>
							<td>
								<button
									onClick={() => handleDelete(order._id)}
									className='btn btn-sm btn-outline-danger'>
									Cancel
								</button>
								<button className='btn btn-sm btn-outline-success ms-2'>
									Pay
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyOrders;
