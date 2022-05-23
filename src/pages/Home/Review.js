import React from "react";
import ster from "../../assets/icon/ster.png";

const Review = ({ review }) => {
	const { rating, review: reviewText, userEmail, userName } = review;

	return (
		<div className='col'>
			<div class='card border-0 bg-light h-100'>
				<div class='card-body text-center'>
					<div
						className='bg-white mx-auto text-black rounded-circle d-flex justify-content-center align-items-center border'
						style={{ width: "70px", height: "70px" }}>
						<small>{userName.slice(0, 1)}</small>
					</div>
					<div>
						{new Array(5).map(ster => (
							<img src={ster} alt='hh' />
						))}
					</div>
					<h5 class='card-title'>{userName}</h5>
					<h6 class='card-subtitle mb-2 text-muted'>{reviewText}</h6>
					{/* <p class='card-text'>{reviewText}</p> */}
				</div>
			</div>
		</div>
	);
};

export default Review;
