import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import background from "../../assets/images/loginbg.jpg";
import Loading from "../../shared/Loading";
import Item from "../Home/Item";

const AllItems = () => {
	const { data: products, isLoading } = useQuery("products", () =>
		fetch("https://lukas-backend.vercel.app/product").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>All Products</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ All Products
				</h6>
			</div>
			<div className='container py-5'>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center'>
					{products.map(product => (
						<Item key={product._id} product={product} />
					))}
				</div>
			</div>
		</>
	);
};

export default AllItems;
