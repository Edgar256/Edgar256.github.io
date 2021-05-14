import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainNavigation extends Component {
	render() {
		return (
			<div className="sidebar">
				<Link to="/" className="profileDetails sidebarLink py-2">
					<div className="w-100 d-flex profileImage">
						<img
							src="../images/EDGAR.jfif"
							alt="Edgar profile"
							className="rounded-circle mx-auto"
						/>
					</div>
					<div className="d-block text-center text-white mb-2">
						<div className="nameFont">EDGAR TINKAMANYIRE</div>
						<p>FULL STACK SOFTWARE ENGINEER</p>
					</div>
				</Link>
				<Link className="sidebarLink py-2" to="/">
					HOME
				</Link>
				<Link className="sidebarLink py-2" to="/about">
					ABOUT
				</Link>
				<Link className="sidebarLink py-2" to="/technologies">
					TECHNOLOGIES
				</Link>
				<Link className="sidebarLink py-2" to="/portfolio">
					PORTFOLIO
				</Link>
				<Link className="sidebarLink py-2" to="/resume">
					SKILLS & CV
				</Link>
				<Link className="sidebarLink py-2" to="/contact">
					CONTACT
				</Link>
			</div>
		);
	}
}
