/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/loginbg.jpg";
import me from "../../assets/images/me.jpeg";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const MyProfile = () => {
	return (
		<>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>My Profile</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ My Profile
				</h6>
			</div>
			<div className='container py-5'>
				<section className='row justify-content-between align-items-center py-5'>
					<div className='col-md-6'>
						<h4>Hi There! I'm</h4>
						<h2>Mohammad Tasib</h2>
						<small>
							I have professional experience with programming languages and
							tools such as{" "}
							<b>
								React, HTML, CSS, Sass, Bootstrap, javascript, ES6, Express Js,
								Material UI, and Firebase Auth
							</b>{" "}
							to contribute features by writing and maintaining code. I also
							have experience in Node.js, JSON, WordPress, After Effects. I am
							highly motivated and enthusiastic, always with excellent attention
							to detail. I will give my best effort to achieve the best result.
							All tasks I try to carry out on time and in full. So if you have
							any questions or inputs, please don't hesitate to contact me.
						</small>
						<p className='m-0'>
							Email : <b>mohammadtasib@gmail.com</b>
						</p>
						<p className='m-0'>
							Educational : <b>Omargani M.E.S. University College</b>
						</p>
					</div>
					<div className='col-md-6 text-center'>
						<img src={me} alt='' className='rounded-pill' width={300} />
					</div>
				</section>
				<section className='py-5'>
					<div className='text-center'>
						<h3>MY PROJECTS</h3>
					</div>
					<div class='row row-cols-1 row-cols-md-3 g-4 pt-5'>
						<div class='col'>
							<div class='card h-100'>
								<img src={project1} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Filmmakers</h5>
									<p class='card-text'>
										Hope you guys this is an amazing project in react js. Lets
										Create a Movies and TV Series App in React JS and Material
										UI with full responsive fuctionality.
									</p>
									<div className='d-flex justify-content-between'>
										<a
											target='_blank'
											href='https://excellen-filmmakers.netlify.app'
											className='btn btn-dark'>
											PREVIEW
										</a>
										<a
											target='_blank'
											href='https://github.com/MdTasib/React-Movie-App'
											className='btn btn-dark'>
											GITHUB
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card h-100'>
								<img src={project2} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										Hope you guys this is an amazing project in react js. The
										project is going to fetch the live data from the API using
										Async/Await syntax. In this video, we also use React Hooks!
									</p>
									<div className='d-flex justify-content-between'>
										<a
											target='_blank'
											href='https://trusting-ride-e7c618.netlify.app'
											className='btn btn-dark'>
											PREVIEW
										</a>
										<a
											target='_blank'
											href='https://github.com/MdTasib/React-COVID_19_Tracker_Application'
											className='btn btn-dark'>
											GITHUB
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card h-100'>
								<img src={project3} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>
										Hope you guys this is an amazing project in react js. Build
										Responsive Website in React JS with Styled-Components and
										GSAP for awesome scroll Animations
									</p>
									<div className='d-flex justify-content-between'>
										<a
											target='_blank'
											href='https://exclusive-agency.netlify.app'
											className='btn btn-dark'>
											PREVIEW
										</a>
										<a
											target='_blank'
											href='https://github.com/MdTasib/React-Agency-Website'
											className='btn btn-dark'>
											GITHUB
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default MyProfile;
