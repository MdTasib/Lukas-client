import React from "react";
import Banner from "./Banner";
import BusinessInfo from "./BusinessInfo";
import CarService from "./CarService";
import Discount from "./Discount";
import Items from "./Items";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<main>
			<Banner />
			<Items />
			<CarService />
			<BusinessInfo />
			<Reviews />
			<Discount />
		</main>
	);
};

export default Home;
