import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";
import ProjectList from "../components/ProjectList";

export default class Portfolio extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<section className="d-block p-5 height-100 contentWrap">
					<div className="display-4 w-100">Portfolio</div>
					<hr />
					<ProjectList />
				</section>
			</div>
		);
	}
}
