import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import payGif from "../../assets/images/pay.gif";
import Loading from "../../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
	const { id } = useParams();
	const url = `http://localhost:5000/purcahses/${id}`;

	const { data: purcahses, isLoading } = useQuery(["purcahses", id], () =>
		fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	const { userName, name, perPrice, productQuantity } = purcahses;
	const payPrice = perPrice * Number(productQuantity);

	const stripePromise = loadStripe(
		"pk_test_51IeAZaFLS713LSSjm5z39rde0Dw558BCbCNNKnHZznQzN9khB8LRy5SdjLKzazWus6sKcNwr70ajIgGmWBloqgCy00pmDjThkv"
	);

	return (
		<>
			<h3 className='border-bottom border-3 border-dark d-inline-block pb-2'>
				Your Payment
			</h3>
			<div className='row align-items-center'>
				<div className='col-md-6'>
					<div class='card border-0 shadow mt-2'>
						<div class='card-body'>
							<h5 class='card-title'>
								Hey! <b>{userName}</b>
							</h5>
							<h6 class='card-subtitle mb-2 text-muted'>
								Please Pay for <b>{name}</b>
							</h6>
							<p class='card-text m-0'>
								Product Quantity: <b>$ {productQuantity}</b>
							</p>
							<p class='card-text m-0'>
								Per Price: <b>$ {perPrice}</b>
							</p>
							<p class='card-text'>
								Total pay: <b>$ {payPrice}</b>
							</p>
						</div>
					</div>

					<div class='card border-0 shadow my-5'>
						<div class='card-body'>
							<Elements stripe={stripePromise}>
								<CheckoutForm product={purcahses} payPrice={payPrice} />
							</Elements>
						</div>
					</div>
				</div>
				<div className='col-md-6'>
					<img src={payGif} alt='' className='w-100' />
				</div>
			</div>
		</>
	);
};

export default Payment;
