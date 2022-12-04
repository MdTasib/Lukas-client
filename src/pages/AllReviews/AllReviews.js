import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import background from "../../assets/images/loginbg.jpg";
import Loading from "../../shared/Loading";
import Review from "../Home/Review";

const AllReviews = () => {
	const { data: reviews, isLoading } = useQuery("reviews", () =>
		fetch("https://lukas-server.onrender.com/review").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>All Reviews</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ All Reviews
				</h6>
			</div>
			<div className='container py-5'>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4  justify-content-center'>
					{reviews.map(review => (
						<Review key={review._id} review={review} />
					))}
				</div>
			</div>
		</>
	);
};

export default AllReviews;
