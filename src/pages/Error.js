import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default class Error extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<section className="d-block p-5 height-100 contentWrap">
					<div className="display-4 w-100">Error page</div>
					<hr />
					<div className="h4 text-center">
						Looks like we just got lost, we need to go <Link to="/"> here</Link>{" "}
					</div>
					<img src="../images/lost.gif" className="w-100" alt="description" />
				</section>
			</div>
		);
	}
}
