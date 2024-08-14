import { Link } from "react-router-dom";

export default function ContactDetails(props) {
  return (
    <div>
      <div className=" display-4 py-5 text-center py-5">Contact</div>
      <div className="" id="contact">
        <div className="card bg-transparent">
          <ul className="list-group list-group-flush bg-transparent fs-4">
            <li className="list-group-item bg-transparent text-lg-start text-center py-3">
              <span className="col-4 col-sm-6">
                Email
                <i className="bi-envelope-fill px-2 text-warning"></i>:
              </span>
              <span>
                {" "}
                <Link
                  className="col-sm-8 text-break  text-decoration-none text-muted"
                  to="mailto:tinka.edgar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tinka.edgar@gmail.com
                </Link>
              </span>
            </li>
            <li className="list-group-item bg-transparent text-lg-start text-center py-3">
              <span className="col-sm-4">
                Stackoverflow
                <i className="bi-stack-overflow px-2 text-danger"></i>:
              </span>{" "}
              <span>
                <Link
                  className="col-sm-8 text-break  text-decoration-none text-muted"
                  to="https://stackoverflow.com/users/6561907/edgar256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://stackoverflow.com/users/6561907/edgar256
                </Link>
              </span>
            </li>
            <li className="list-group-item bg-transparent text-lg-start text-center py-3">
              <span className="col-sm-4">
                Linkedin<i className="bi-linkedin px-2 text-info"></i>:
              </span>{" "}
              <span>
                <Link
                  className="col-sm-8 text-break text-decoration-none text-muted"
                  to="https://www.linkedin.com/in/tinkamanyire-edgar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/tinkamanyire-edgar/
                </Link>
              </span>
            </li>
            <li className="list-group-item bg-transparent text-lg-start text-center py-3">
              <span className="col-sm-4">
                Github<i className="bi-github px-2"></i>:
              </span>{" "}
              <span>
                <Link
                  className="col-sm-8 text-break  text-decoration-none text-muted"
                  to="https://github.com/Edgar256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Edgar256
                </Link>
              </span>
            </li>
            <li className="list-group-item bg-transparent text-lg-start text-center py-3">
              <span className="col-sm-4">
                Codewars<i className="bi-code-slash px-2"></i>:
              </span>{" "}
              <span>
                <Link
                  className="col-sm-8 text-break  text-decoration-none text-muted"
                  to="https://www.codewars.com/users/Edgar256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.codewars.com/users/Edgar256
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="py-5 my-5 text-center">
          <footer
            className={props.isDark ? "text-white fw-normal" : "text-dark fw-normal"}
          >
            <p>&copy; 2023 Edgar Tinkamanyire. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
