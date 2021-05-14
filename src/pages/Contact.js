import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";

export default class Contact extends Component {
	render() {
		return (
			<div className="pageWrap">
				<MainNavigation />
				<section className="d-block p-5 height-100 contentWrap">
					<div className="display-4 w-100">Contact</div>
					<hr />
					<div className="card w-100">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<span className="text-secondary">
									Email
									<i className="fa fa-envelope mr-2 p-1"></i>:
								</span>
								<span className="p-0 ml-3">tinka.edgar@gmail.com</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://stackoverflow.com/users/6561907/edgar256"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									StackOverflow
									<i className="fa fa-stack-overflow mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://stackoverflow.com/users/6561907/edgar256"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://stackoverflow.com/users/6561907/edgar256
									</a>
								</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://www.linkedin.com/in/tinkamanyire-edgar/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									Linked
									<i className="fa fa-linkedin-square mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://www.linkedin.com/in/tinkamanyire-edgar/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://www.linkedin.com/in/tinkamanyire-edgar/
									</a>
								</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://github.com/Edgar256"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									Github
									<i className="fa fa-github mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://github.com/Edgar256"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://github.com/Edgar256
									</a>
								</span>
							</li>
							<li className="list-group-item">
								<a
									href="https://www.codewars.com/users/Edgar256"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary"
								>
									Codewars
									<i className="fa fa-code mr-2 p-1"></i>:
								</a>
								<span className="p-0 ml-3">
									<a
										href="https://www.codewars.com/users/Edgar256"
										target="_blank"
										rel="noopener noreferrer"
										className="text-secondary"
									>
										https://www.codewars.com/users/Edgar256
									</a>
								</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
