import React from "react";

const Item = ({ product }) => {
	const { img, name, perPrice } = product;
	return (
		<div className='col'>
			<div className='bg-light rounded pb-3'>
				<img src={img} alt='' className='w-100' />
				<div className='text-center px-3'>
					<h6 className='fw-bold'>{name}</h6>
					<small className='d-block pb-2'>
						<b>Price:</b> ${perPrice}
					</small>
					<button className='btn btn-dark btn-sm'>Purchase</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
