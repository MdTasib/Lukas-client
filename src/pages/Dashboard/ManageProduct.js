import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery("products", () =>
		fetch("http://localhost:5000/product").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h3>MANAGE ALL PRODUCTS</h3>
			<table class='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>SR</th>
						<th scope='col'>Product</th>
						<th scope='col'>Stock</th>
						<th scope='col'>Increase Stock</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((product, index) => (
						<ProductRow
							key={product._id}
							product={product}
							index={index}
							refetch={refetch}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageProduct;
