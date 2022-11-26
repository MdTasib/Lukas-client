import React from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
	const { email, role } = user;

	const handleMakeAdmin = () => {
		Swal.fire({
			title: "Are you sure?",
			text: `You make an ADMIN - ${email}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Make Admin",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`https://lukas-backend.vercel.app/user/admin/${email}`, {
					method: "PUT",
					headers: {
						authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				})
					.then(res => {
						if (res.status === 403) {
							Swal.fire({
								position: "top-center",
								icon: "warning",
								title: "You don't make an admin",
								showConfirmButton: false,
								timer: 1500,
							});
						}
						return res.json();
					})
					.then(data => {
						if (data.modifiedCount > 0) {
							refetch();
							Swal.fire({
								position: "top-center",
								icon: "success",
								title: "Successfully make an admin",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
			}
		});
	};
	return (
		<tr>
			<th scope='row'>{index + 1}</th>
			<td>{user.email}</td>
			<td>
				{role !== "admin" ? (
					<button
						onClick={handleMakeAdmin}
						className='btn btn-sm btn-outline-dark'>
						MAKE ADMIN
					</button>
				) : (
					<p className='m-0 text-success fw-bold'>ADMIN</p>
				)}
			</td>
		</tr>
	);
};

export default UserRow;
