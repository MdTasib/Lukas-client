import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import Item from "./Item";

const Items = () => {
	const navigate = useNavigate();

	const { data: products, isLoading } = useQuery("products", () =>
		fetch("https://lukas-backend.vercel.app/product").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<section className='container py-5'>
			<div className='w-75 mx-auto text-center'>
				<h3>BEST PRODUCTS</h3>
				<small>
					All best seller product are now available for you and your can buy
					this product from here any time any where so sop now
				</small>
			</div>
			<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center pt-5'>
				{products.slice(0, 8).map(product => (
					<Item key={product._id} product={product} />
				))}
			</div>
			<div className='text-center pt-5'>
				<button onClick={() => navigate("/all-items")} className='btn btn-dark'>
					SEE ALL PRODUCTS
				</button>
			</div>
		</section>
	);
};

export default Items;
