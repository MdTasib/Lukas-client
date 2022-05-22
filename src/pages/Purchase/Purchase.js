import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import background from "../../assets/images/loginbg.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

const Purchase = () => {
	const { id } = useParams();
	const [user] = useAuthState(auth);
	const addressRef = useRef("");
	const phoneRef = useRef("");
	const productQuantityRef = useRef("");

	const { data: product, isLoading } = useQuery(["product", id], () =>
		fetch(`http://localhost:5000/product/${id}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	const handlePurchase = event => {
		event.preventDefault();
		const address = addressRef.current.value;
		const phone = phoneRef.current.value;
		const productQuantity = productQuantityRef.current.value;

		if (productQuantity > product.available) {
			return toast.error("Product not stock");
		}

		const purchaseProduct = {
			userName: user?.displayName,
			userEmail: user?.email,
			name: product.name,
			img: product.img,
			perPrice: product.perPrice,
			address,
			phone,
			productQuantity,
		};

		fetch("http://localhost:5000/product", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(purchaseProduct),
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					toast.success("Successfully Purchase Product");
					event.target.reset();
				}
			});
	};

	return (
		<div className=''>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>Purchase Product</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home
					</Link>
					/ Purcahse
				</h6>
			</div>
			<div className='row align-items-center p-5 rounded container mx-auto'>
				<div className='col-md-6'>
					<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
						Purchase
					</h3>
					<small className='d-block'>Insert your information:</small>

					<form onSubmit={handlePurchase}>
						<div className='input-group my-3'>
							<input
								type='text'
								className='form-control'
								value={user?.displayName}
								readOnly
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>📧</span>
							<input
								type='email'
								className='form-control'
								value={user?.email}
								readOnly
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>🏙</span>
							<input
								ref={addressRef}
								type='text'
								className='form-control'
								placeholder='Address'
								required
							/>
						</div>
						<div className='input-group my-3'>
							<span className='input-group-text'>📞</span>
							<input
								ref={phoneRef}
								type='text'
								className='form-control'
								placeholder='Phone Number'
								required
							/>
						</div>
						<div>
							<label for='inputState' class='form-label'>
								Product Quantity
							</label>
							<select
								ref={productQuantityRef}
								id='inputState'
								class='form-select'>
								{product.orderQuantity.map(quantity => (
									<option>{quantity}</option>
								))}
							</select>
						</div>
						<button type='submit' className='btn btn-dark mt-2 w-100'>
							Place Order
						</button>
					</form>
				</div>
				<div className='col-md-6 text-center'>
					<img src={product.img} alt='' />
					<h5>{product.name}</h5>
					<p className='m-0'>
						<b>Per unit price</b> : {product.perPrice}
					</p>
					<p className='m-0'>
						<b>Available</b> : {product.available}
					</p>
				</div>
			</div>
			<div className='container py-5'>
				<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
					Description
				</h3>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default Purchase;
