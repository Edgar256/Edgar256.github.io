import React, { Component } from "react";
import "./css/App.css";
import "animate.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import data from "./data/data";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
		};
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/technologies" component={Technologies} />
					<Route path="/contact" component={Contact} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/resume" component={Resume} />
					<Route path="/:id" component={Project} />
					<Route component={Error} />
				</Switch>
			</Router>
		);
	}
}
