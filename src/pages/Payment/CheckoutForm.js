import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../shared/Loading";

const CheckoutForm = ({ product, payPrice }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const [success, setSuccess] = useState("");
	const [transactionId, setTransacticeId] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);

	const { _id, userName, userEmail, name } = product;

	useEffect(() => {
		fetch("https://damp-scrubland-03827.herokuapp.com/create-payment-intent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify({ payPrice }),
		})
			.then(res => res.json())
			.then(data => {
				if (data?.clientSecret) {
					setClientSecret(data.clientSecret);
				}
			});
	}, [payPrice, _id]);

	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setCardError(error?.message);
			setSuccess("");
			setIsProcessing(true);
		} else {
			setCardError("");
		}

		// confirm card payment
		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: userName,
						email: userEmail,
					},
				},
			});

		if (intentError) {
			setCardError(intentError.message);
			setSuccess("");
			setIsProcessing(false);
		} else {
			setTransacticeId(paymentIntent.id);
			setCardError("");
			setSuccess("Congrats!! Your payment is complete. 😀🤩");
			Swal.fire({
				position: "top-center",
				icon: "success",
				title: "Congrats!! Your payment is complete. 😀🤩",
				showConfirmButton: false,
				timer: 1500,
			});

			// store payment on database
			const payment = {
				productId: _id,
				product: name,
				status: "pending",
				transactionId: paymentIntent.id,
			};

			fetch(`https://damp-scrubland-03827.herokuapp.com/purcahses/${_id}`, {
				method: "PATCH",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify(payment),
			})
				.then(res => res.json())
				.then(data => {
					setIsProcessing(false);
				});
		}
	};

	if (isProcessing) {
		return <Loading />;
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='p-3'>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					type='submit'
					className='btn btn-sm btn-success text-white mt-4'
					disabled={!stripe || !clientSecret}>
					Pay
				</button>
			</form>
			{cardError && <small className='text-danger'>{cardError}</small>}
			{success && (
				<div className='pt-2'>
					<p className='text-success'>{success}</p>
					<span className='text-warning'>
						Your Transactice id: <b>{transactionId}</b>
					</span>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
