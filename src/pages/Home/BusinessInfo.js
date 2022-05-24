import React from "react";
import background from "../../assets/images/infobg.jpg";
import info1 from "../../assets/icon/car.png";
import info2 from "../../assets/icon/service.png";
import info3 from "../../assets/icon/settings.png";
import info4 from "../../assets/icon/community.png";

const BusinessInfo = () => {
	const infos = [
		{ id: 1, title: "NEW CARS IN STOCK", count: "450+", icon: info1 },
		{ id: 2, title: "USED CARS IN STOCK", count: "890+", icon: info2 },
		{ id: 3, title: "SERVICE CENTERS", count: "430+", icon: info3 },
		{ id: 4, title: "HAPPY CLIENTS", count: "50K", icon: info4 },
	];

	const bg = {
		backgroundImage: `url(${background})`,
		backgroundSize: "cover",
	};

	return (
		<section className='py-5' style={bg}>
			<div className='container'>
				<h3 className='text-center pb-4 text-white fw-bold'>Our Achievement</h3>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
					{infos.map(info => (
						<div className='text-center text-white' key={info.id}>
							<img src={info.icon} alt='' className='w-25 pb-3' />
							<h4 className='fw-bold'>{info.count}</h4>
							<small>{info.title}</small>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BusinessInfo;
