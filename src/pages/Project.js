import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";
import data from "../data/data";

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: data,
			id: parseInt(this.props.location.pathname.replace("/", "")),
			project: null,
		};
		this.handleID = this.handleID.bind(this);
		this.openExternalLink = this.openExternalLink.bind(this);
		this.splitURL = this.splitURL.bind(this);
		console.log(this.props.match.params.id);
	}

	componentDidMount() {
		this.handleID();
	}

	handleID() {
		let { projects, id } = this.state;
		let idList = [];
		for (let i = 0; i < projects.length; i++) {
			idList.push(projects[i].id);
		}
		if (idList.indexOf(id) === -1) {
			this.setState({
				id: null,
				project: null,
			});
		} else {
			this.setState({
				id: id,
				project: projects[id - 1],
			});
		}
	}

	openExternalLink(url) {
		window.open(this.makeHref(url));
	}

	splitURL(url) {
		console.log(123, url);
		return url;
	}

	render() {
		console.log(this.state);
		return (
			<div className="pageWrap">
				<MainNavigation />
				<span className="d-block p-5 height-100 contentWrap">
					{this.state.project !== null ? (
						<div>
							<div className="display-4 w-100">
								Project #{this.state.project.id}
							</div>
							<hr />
							<div>
								<h2>{this.state.project.name}</h2>
								<div>{this.state.project.descriptionFull}</div>
								<div className="d-flex my-2">
									{this.state.project.websiteURL ? (
										<a
											href={this.state.project.websiteURL}
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-primary mr-5"
										>
											VISIT WEBSITE
										</a>
									) : (
										<a
											href={this.state.project.codeURL}
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-primary mr-5"
										>
											VIEW GITHUB REPO
										</a>
									)}
								</div>
								<div className="mt-5">
									<h4 className="bg-light w-100 p-2">
										ROLE: {this.state.project.role}
									</h4>
									<div>{this.state.project.roleRecap}</div>
									<div className="d-flex flex-wrap">
										{this.state.project.tech.map((elem) => {
											return (
												<span className="btn btn-light m-2" key={elem}>
													{elem}
												</span>
											);
										})}
									</div>
									<div className="mt-3">
										<h6>PERSONAL CONTRIBUTION TO THE PROJECT</h6>
										<ul>
											{this.state.project.contribution.map((el) => {
												return <li key={el}>{el}</li>;
											})}
										</ul>
									</div>
									<div className="my-5">
										{this.state.project.photos.map((el) => {
											return (
												<img
													src={`../images/${el}`}
													className="w-100 px-3 py-5 shadow my-3"
													alt="description"
													key={el}
												/>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					) : (
						<div>No project to Show</div>
					)}
				</span>
			</div>
		);
	}
}
