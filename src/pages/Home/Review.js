import React from "react";
import ster from "../../assets/icon/ster.png";

const Review = ({ review }) => {
	const { rating, review: reviewText, userName } = review;

	return (
		<div className='col'>
			<div class='card border-0 bg-light h-100'>
				<div class='card-body text-center'>
					<div
						className='bg-white mx-auto text-black rounded-circle d-flex justify-content-center align-items-center border'
						style={{ width: "70px", height: "70px" }}>
						<small className='fw-bold'>{userName.slice(0, 1)}</small>
					</div>
					<div className='pt-2'>
						{[...Array(Number(rating))].map((star, index) => (
							<img key={index} src={ster} alt='' width={15} className='mx-1' />
						))}
					</div>
					<h5 class='card-title py-2'>{userName}</h5>
					<small class='card-subtitle mb-2 text-muted'>{reviewText}</small>
				</div>
			</div>
		</div>
	);
};

export default Review;
