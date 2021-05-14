import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

export default class ProjectList extends Component {
	render() {
		const Projects = data.map((project, id) => (
			<div className="my-5 projectCard" key={id}>
				<span className="w-50">
					<h3>{project.name}</h3>
					<div className="bg-light p-2">ROLE: {project.role}</div>
					<div>{project.description}</div>
					<div className="mt-2">TECHNOLOGY</div>
					<div className="d-flex flex-wrap">
						{project.tech.map((el) => (
							<span className="btn btn-light m-2" key={el}>
								{el}
							</span>
						))}
					</div>
					<div className="d-flex justify-content-between">
						<Link className="btn btn-success" to={`/${project.id}`}>
							VIEW MORE
						</Link>
						{project.websiteURL ? (
							<a
								href={project.websiteURL}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary mr-5"
							>
								VISIT WEBSITE
							</a>
						) : (
							<a
								href={project.codeURL}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary mr-5"
							>
								VIEW GITHUB REPO
							</a>
						)}
					</div>
				</span>
				<span className="w-50">
					<img
						src={`../${project.profilePhoto}`}
						className="w-100 p-2 shadow"
						alt="description"
					/>
				</span>
			</div>
		));

		return <div className="my-5">{Projects}</div>;
	}
}
