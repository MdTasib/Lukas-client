import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery("users", () =>
		fetch("http://localhost:5000/user", {
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<div>
			<h3>ADD A NEW ADMIN</h3>
			<table class='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>SR</th>
						<th scope='col'>Email</th>
						<th scope='col'>Admin</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user, index) => (
						<UserRow
							key={user._id}
							index={index}
							refetch={refetch}
							user={user}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MakeAdmin;
