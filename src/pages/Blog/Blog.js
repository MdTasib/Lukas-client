import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/loginbg.jpg";

const Blog = () => {
	return (
		<>
			<div
				className='text-center py-5 text-white'
				style={{ backgroundImage: `url(${background})` }}>
				<h2 className='pb-3'>Blog</h2>
				<h6>
					<Link className='text-white text-decoration-none' to='/'>
						Home{" "}
					</Link>
					/ Blog
				</h6>
			</div>
			<div className='container py-5'>
				<div class='card mb-3'>
					<div class='card-body'>
						<h5 class='card-title fw-bold'>
							How will you improve the performance of a React Application?
						</h5>
						<p class='card-text'>
							<b>Performance Optimization Techniques</b>
							<ul className='m-0'>
								<li>Function/Stateless Components and React.PureComponent</li>
								<li>Using Immutable Data Structures</li>
								<li>Dependency optimization</li>
								<li>
									Use React.Fragments to Avoid Additional HTML Element Wrappers
								</li>
								<li>
									To optimize React rendering, you need to make sure that
									components receive only necessary props.
								</li>
							</ul>
						</p>
					</div>
				</div>
				<div class='card mb-3'>
					<div class='card-body'>
						<h5 class='card-title fw-bold'>
							What are the different ways to manage a state in a React
							application?
						</h5>
						<p class='card-text'>
							React uses an observable object as the state that observes what
							changes are made to the state and helps the component behave
							accordingly.
						</p>
						<p className='fw-bold'>
							Some Types of Application State in React and How They Help in
							State Management
						</p>
						<ul className='m-0'>
							<li>Local state</li>
							<li>Global state</li>
							<li>URL state</li>
							<li>Server state</li>
						</ul>
					</div>
				</div>
				<div class='card mb-3'>
					<div class='card-body'>
						<h5 class='card-title fw-bold'>
							How does prototypical inheritance work?
						</h5>
						<p class='card-text'>
							Most important concept in prototypical inheritance.
							Prototype-based programming is a style of object-oriented
							programming in which behaviour reuse known as inheritance is
							performed via a process of reusing existing objects that serve as
							prototypes. This model can also be known as prototypal,
							prototype-oriented, classless, or instance-based programming.
							However prototypal inheritance includes not only prototypes
							inheriting from other prototypes but also objects inheriting from
							prototypes.
						</p>
					</div>
				</div>
				<div class='card mb-3'>
					<div class='card-body'>
						<h5 class='card-title fw-bold'>
							Why you do not set the state directly in React. For example, if
							you have const [products, setProducts] = useState([]). Why you do
							not set products = [...] instead, you use the setProducts
						</h5>
						<p class='card-text'>
							One of the "main" rules of React - never change the state
							directly? First of all If you update it directly, calling the
							setState() afterward may just replace the update you made.
							Secondly When you directly update the state, it does not change
							state immediately. Instead, it creates a pending state transition,
							and accessing it after calling this method will only return the
							present value. You will lose control of the state across all
							components.
						</p>
					</div>
				</div>
				<div class='card mb-3'>
					<div class='card-body'>
						<h5 class='card-title fw-bold'>
							What is a unit test? Why should write unit tests?
						</h5>
						<p class='card-text'>
							Unit testing is testing the smallest testable unit of an
							application. It is done during the coding phase by the developers.
							To perform unit testing, a developer writes a piece of code (unit
							tests) to verify the code to be tested (unit) is correct.
							Developers can write unit tests as soon as they finish writing
							code without having to wait for others. This makes it easier for
							developers to identify and fix bugs as they are usually quite
							familiar with the code they recently worked on.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
