import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";

export default class Technologies extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<span className="d-block p-5 height-100 contentWrap">
					<div className="display-4 w-100">Technologies</div>
					<hr />
					<p>I have experience in the following tech stack</p>
					<div className="my-5">
						<h3>PROTOTYPING AND WIREFRAMING</h3>
						<hr />
						<div className="d-flex flex-wrap">
							<span className="btn btn-light m-2">PEN & PAPER</span>
							<span className="btn btn-light m-2">FIGMA</span>
							<span className="btn btn-light m-2">INVISION</span>
							<span className="btn btn-light m-2">XD</span>
							<span className="btn btn-light m-2">SKETCH</span>
							<span className="btn btn-light m-2">ILLUSTRATOR</span>
							<span className="btn btn-light m-2">PHOTOSHOP</span>
							<span className="btn btn-light m-2">FIGMA</span>
						</div>
					</div>
					<div className="my-5">
						<h3>FRONTEND</h3>
						<hr />
						<div className="d-flex flex-wrap">
							<span className="btn btn-light m-2">HTML5</span>
							<span className="btn btn-light m-2">CSS3</span>
							<span className="btn btn-light m-2">VANILLA JS</span>
							<span className="btn btn-light m-2">REACT JS</span>
							<span className="btn btn-light m-2">ANGULAR JS</span>
							<span className="btn btn-light m-2">TYPESCRIPT</span>
							<span className="btn btn-light m-2">VUE JS</span>
							<span className="btn btn-light m-2">SASS</span>
							<span className="btn btn-light m-2">POLARIS</span>
						</div>
					</div>
					<div className="my-5">
						<h3>BACKEND</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">NODE JS</span>
							<span className="btn btn-light m-2">PHP</span>
							<span className="btn btn-light m-2">RESTFUL APIS</span>
							<span className="btn btn-light m-2">GRAPHQL</span>
						</div>
					</div>
					<div className="my-5">
						<h3>MOBILE</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">REACT NATIVE</span>
							<span className="btn btn-light m-2">IONIC</span>
							<span className="btn btn-light m-2">CORDOVA</span>
							<span className="btn btn-light m-2">FLUTTER</span>
						</div>
					</div>
					<div className="my-5">
						<h3>CMS</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">WORDPRESS</span>
							<span className="btn btn-light m-2">SHOPIFY</span>
							<span className="btn btn-light m-2">DRUPAL</span>
							<span className="btn btn-light m-2">JOOMLA</span>
						</div>
					</div>
					<div className="my-5">
						<h3>VERSION CONTROL</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">GITHUB</span>
							<span className="btn btn-light m-2">BITBUCKET</span>
						</div>
					</div>
					<div className="my-5">
						<h3>DEV-OPS</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">AWS</span>
							<span className="btn btn-light m-2">HEROKU</span>
							<span className="btn btn-light m-2">DOCKERS</span>
						</div>
					</div>
					<div className="my-5">
						<h3>DATABASES</h3>
						<hr />
						<div className="d-flex">
							<span className="btn btn-light m-2">MONGO DB</span>
							<span className="btn btn-light m-2">MYSQL</span>
							<span className="btn btn-light m-2">POSTGRESS</span>
						</div>
					</div>
				</span>
			</div>
		);
	}
}
