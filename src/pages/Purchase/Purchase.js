import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import background from "../../assets/images/loginbg.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const Purchase = () => {
	const { id } = useParams();
	const [user] = useAuthState(auth);
	const addressRef = useRef("");
	const phoneRef = useRef("");
	const productQuantityRef = useRef("");

	const {
		data: product,
		isLoading,
		refetch,
	} = useQuery(["product", id], () =>
		fetch(`https://damp-scrubland-03827.herokuapp.com/product/${id}`, {
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

		if (productQuantity < 49) {
			return Swal.fire({
				position: "top-center",
				icon: "warning",
				title: "Minimum Order Quantity - 50",
				showConfirmButton: false,
				timer: 1500,
			});
		}

		if (productQuantity > product?.available) {
			return Swal.fire({
				position: "top-center",
				icon: "warning",
				title: "There are not so many products in stock",
				showConfirmButton: false,
				timer: 1500,
			});
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

		// purchase product post on database
		fetch("https://damp-scrubland-03827.herokuapp.com/product", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(purchaseProduct),
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title:
							"Successfully purchase your product. Please go to the dashboard and payment complete.",
						showConfirmButton: false,
						timer: 2000,
					});
					event.target.reset();
				}
			});

		// update purchase product available quantity on database
		const newQuantity = product.available - productQuantity;
		fetch(`https://damp-scrubland-03827.herokuapp.com/product/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ newQuantity }),
		})
			.then(res => res.json())
			.then(data => refetch());
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
							<label htmlFor='inputState' className='form-label'>
								Quantity - <b>( Minimum Order Quantity - 50)</b>
							</label>
							<select
								defaultValue={product.orderQuantity[1]}
								ref={productQuantityRef}
								id='inputState'
								className='form-select'>
								{product.orderQuantity.map((quantity, index) => (
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
					<img src={product.img} alt='' className='w-100' />
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
