import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Review from "./Review";

const Reviews = () => {
	const { data: reviews, isLoading } = useQuery("reviews", () =>
		fetch("http://localhost:5000/review").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className='container py-5'>
			<div className='text-center'>
				<small className='text-secondary'>LATEST TESTIMINIALS</small>
				<h3 className='fw-bold pt-2'>What They're Saying</h3>
			</div>
			<div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5 g-4'>
				{reviews.map(review => (
					<Review key={review._id} review={review} />
				))}
			</div>
		</div>
	);
};

export default Reviews;
