import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import Review from "./Review";

const Reviews = () => {
	const navigate = useNavigate();

	const { data: reviews, isLoading } = useQuery("reviews", () =>
		fetch("http://localhost:5000/review").then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	const latestReviews = [...reviews].splice(reviews.length - 3, reviews.length);

	return (
		<section className='container py-5'>
			<div className='text-center'>
				<small className='text-secondary'>LATEST TESTIMINIALS</small>
				<h3 className='fw-bold pt-2'>What They're Saying</h3>
			</div>
			<div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5 g-4  justify-content-center'>
				{latestReviews.map(review => (
					<Review key={review._id} review={review} />
				))}
			</div>
			<div className='text-center pt-5'>
				<button
					onClick={() => navigate("/all-reviews")}
					className='btn btn-dark'>
					SEE ALL REVIEWS
				</button>
			</div>
		</section>
	);
};

export default Reviews;
