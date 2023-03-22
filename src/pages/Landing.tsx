import { HashRouter, Link } from 'react-router-dom';
import '../App.css';
import ParticlesBackground from '../components/ParticlesBackground';
import Typewriter from 'typewriter-effect';

// component imports
import Project from '../components/Project';

// import data dumps
import data from '../data/projects';
import backend from '../data/backend';
import prototyping from '../data/prototyping';
import frontend from '../data/frontend';
import mobileapps from '../data/mobileapps';
import cms from '../data/cms';
import databases from '../data/databases';
import versioning from '../data/versioning';
import devops from '../data/devops';

function Landing() {
  return (
    <div>
      <ParticlesBackground />
      <div className="container-fluid position-relative">      
          <div
            className="d-flex justify-content-lg-center justify-content-sm-start pt-3"
            id="home"
          >
            <nav className="navbar navbar-expand-lg navbar-white bg-transparent text-white">
              <button
                className="navbar-toggler text-white bg-white"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-white"></span>
              </button>
              <div
                className="collapse navbar-collapse w-100 bg-transparent"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav w-100">
                  <hr className="d-md-none d-sm-block border border-dark my-1" />
                  <li className="nav-item active">
                    <a className="nav-link text-white fs-4 px-3" href="/">
                      Home
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                  <li className="nav-item">
                    <a className="nav-link text-white fs-4 px-3" href="#about">
                      About
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                  <li className="nav-item">
                    <a
                      className="nav-link text-white fs-4 px-3"
                      href="/#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                  <li className="nav-item">
                    <a className="nav-link text-white fs-4 px-3" href="/#tech">
                      Technologies
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                  <li className="nav-item">
                    <a className="nav-link text-white fs-4 px-3" href="/#skill">
                      Skills & CV
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                  <li className="nav-item">
                    <a
                      className="nav-link text-white fs-4 px-3"
                      href="/#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <hr className="d-md-none d-sm-block border border-white my-1" />
                </ul>
              </div>
            </nav>
          </div>        
      </div>
      <div className="container position-relative min-vh-100 d-flex justify-content-center align-items-center">
        <div className="w-100 h-100  p-0 py-0">
          <div className="d-lg-flex w-100 d-sm-block">
            <div className="d-sm-flex justify-content-sm-center">
              <img
                src="./images/edgar-photo.jpg"
                alt="Edgar profile"
                className="rounded-circle mx-auto py-1 px-2"
                width={150}
                height={150}
              />
            </div>
            <div className="w-100 px-2 py-2">
              <div className="text-white display-2 d-sm-flex justify-content-lg-start justify-content-sm-center text-xl-start text-lg-start text-md-start text-left text-sm-center">
                Hi, I'm Edgar Tinkamanyire,
              </div>
              <div className="text-white fs-4">
                <Typewriter
                  options={{
                    strings: [
                      'a FullStack Software Engineer with experience in both FrontEnd and BackEnd Development',
                      'I build Web and Mobile Apps',
                      'When I am not consuming RestFul APIs, you will find me taking Coffee',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid position-relative min-vh-100 p-xl-5"
        id="about"
      >
        <div className="w-100 h-100 d-flex justify-content-center align-items-center p-0">
          <div>
            <div className="text-white display-4 py-5 text-center">About</div>
            <div className="text-white text-center py-5 fs-4">
              I'm a FrontEnd Developer at Mobile Paradigm Group (MPG) a Tech
              Company in Uganda(East-Africa). I have a big passion for UI
              effects, dynamic user experience, website and mobile-app
              development. Over the years , I have played a key role in
              converting ideas from ink to robust scalable web and mobile apps,
              following the best engineering principles. My experience has
              taught me that every problem requires a unique solution. This has
              been the key to my success and the teams I have worked with. Have
              an idea you want to convert into a WebApp or Mobile App ? Get in
              Touch
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-relative min-vh-100 p-xl-5"
        id="portfolio"
      >
        <div className="w-100">
          <div className="text-white display-4 py-3 text-center py-5 w-100">
            Portfolio
          </div>
        </div>
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.name}
              role={project.role}
              description={project.descriptionFull}
              tech={project.tech}
              photo={project.profilePhoto}
              id={project.id}
              websiteURL={project.websiteURL}
              codeURL={project.codeURL}
            />
          );
        })}
      </div>

      <div
        className="container-fluid position-relative min-vh-100 p-xl-5 py-5 my-5"
        id="tech"
      >
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div className="w-100">
            <div className="text-white display-4 py-3 text-center py-5 w-100">
              Technologies
            </div>
            <div className="text-white py-3">
              <h4>PROTOTYPING AND WIREFRAMING</h4>
              <div className="d-flex flex-wrap">
                {prototyping &&
                  prototyping.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>FRONTEND</h4>
              <div className="d-flex flex-wrap">
                {frontend &&
                  frontend.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>BACKEND</h4>
              <div className="d-flex flex-wrap">
                {backend &&
                  backend.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>MOBILE APPS</h4>
              <div className="d-flex flex-wrap">
                {mobileapps &&
                  mobileapps.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>CMS</h4>
              <div className="d-flex flex-wrap">
                {cms &&
                  cms.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DATABASES</h4>
              <div className="d-flex flex-wrap">
                {databases &&
                  databases.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>VERSION CONTROL</h4>
              <div className="d-flex flex-wrap">
                {versioning &&
                  versioning.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DEV-OPS</h4>
              <div className="d-flex flex-wrap">
                {devops &&
                  devops.map((elem) => (
                    <button
                      className="btn btn-outline-secondary text-white rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative min-vh-100 my-5 py-5 p-xl-5">
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div className="w-100">
            <div className="text-white display-4 py-5 text-center">
              Skills & Resume
            </div>
            <div className="text-white py-3 fs-4" id="skill">
              <a
                href="./images/EDGAR TINKAMANYIRE RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my full PDF resume here
              </a>
            </div>
            <div className="d-flex text-white w-100 p-4">
              <p className="bi-list-nested display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Agile Development</h2>
                <p className="fs-4">
                  I have over 5 years experience working in Agile development
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-4">
              <p className="bi-person-bounding-box display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Leadership Skills & Team work</h2>
                <p className="fs-4">
                  For the last 5 years , I have hard an opportunity to lead a
                  team of my own. I have a lot of experience working with other
                  people in a team both in-house and remotely.
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-3">
              <p className="bi-people-fill display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Collaboration Skills</h2>
                <p className="fs-4">
                  I boast off a vast experience in major collaboration tools
                  like Slack for communication, Invision & Figma for prototyping
                  and wireframing, Postman & Swagger for API documentation, Git
                  for version control.
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-3">
              <p className="bi-x-diamond-fill display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Pixel Perfect</h2>
                <p className="fs-4">
                  My designs are pixel perfect, with strong emphasis on user
                  empathy
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-3">
              <p className="bi-columns-gap display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Responsive Design</h2>
                <p className="fs-4">
                  All the website apps I build are fully mobile responsive
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center">
        <div className="w-100">
          <div className="text-white display-4 py-5 text-center py-5">
            Contact
          </div>
          <div className="" id="contact">
            <div className="card bg-transparent">
              <ul className="list-group list-group-flush bg-transparent fs-4">
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-4 col-sm-6">
                    Email <i className="bi-envelope-fill px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break text-white text-decoration-none text-muted"
                    to="mailto:tinka.edgar@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tinka.edgar@gmail.com
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Stackoverflow <i className="bi-stack-overflow px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break text-white text-decoration-none text-muted"
                    to="https://stackoverflow.com/users/6561907/edgar256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stackoverflow.com/users/6561907/edgar256
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Linkedin <i className="bi-linkedin px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break text-white text-decoration-none text-muted"
                    to="https://www.linkedin.com/in/tinkamanyire-edgar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/tinkamanyire-edgar/
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Github <i className="bi-github px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break text-white text-decoration-none text-muted"
                    to="https://github.com/Edgar256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Edgar256
                  </Link>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Codewars <i className="bi-code-slash px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break text-white text-decoration-none text-muted"
                    to="https://www.codewars.com/users/Edgar256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.codewars.com/users/Edgar256
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
