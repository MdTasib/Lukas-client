import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const MyOrders = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	const { data: purcahsesOrder, isLoading } = useQuery(
		["purcahsesOrder", user?.email],
		() =>
			fetch(`http://localhost:5000/purcahses?email=${user?.email}`, {
				method: "GET",
				headers: {
					authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}).then(res => {
				console.log(res);
				if (res.status === 401 || res.status === 403) {
					signOut(auth);
					localStorage.removeItem("accessToken");
					navigate("/");
					console.log(res);
				}
				return res.json();
			})
	);

	if (loading || isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h3>My orders</h3>
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
								<button className='btn btn-sm btn-danger'>Cancel</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyOrders;
