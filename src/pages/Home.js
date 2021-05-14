import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Typewriter from "typewriter-effect";

export default class Home extends Component {
	render() {
		return (
			<div className="homePage">
				<MainNavigation />
				<section className="text-white pt-5 px-5 height-100 contentWrap">
					<div className="greetingText">
						<div className="display-3 mt-2 d-block">Hi, I'm Edgar,</div>
						<div className="h4 my-5 greetingDescription">
							<Typewriter
								options={{
									strings: [
										"a FullStack Software Engineer with experience in both FrontEnd and BackEnd Development",
										"I build Web and Mobile Apps",
										"When I am not consuming RestFul APIs, you will find me taking Coffee",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
					</div>
					<div className="d-block mt-5 pt-5">
						<div className="p-2 mt-5">
							<Link to="/portfolio" className="btn btn-light customButton">
								PORTFOLIO
							</Link>
						</div>
						<div className="p-2">
							<Link to="/contact" className="btn btn-light customButton">
								CONTACT
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
