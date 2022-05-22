import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Item from "./Item";

const Items = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);
	// const { data: products, isLoading } = useQuery("products", () =>
	// 	fetch("products.json").then(res => res.json())
	// );

	return (
		<div className='container py-5'>
			<div className='w-75 mx-auto text-center'>
				<h3>BEST PRODUCTS</h3>
				<small>
					All best seller product are now available for you and your can buy
					this product from here any time any where so sop now
				</small>
			</div>
			<div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center pt-5'>
				{products.map(product => (
					<Item product={product} />
				))}
			</div>
		</div>
	);
};

export default Items;
