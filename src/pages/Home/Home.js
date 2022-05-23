import React from "react";
import Banner from "./Banner";
import BusinessInfo from "./BusinessInfo";
import Items from "./Items";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<div>
			<Banner />
			<Items />
			<BusinessInfo />
			<Reviews />
		</div>
	);
};

export default Home;
