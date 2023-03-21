import '../App.css';
import ParticlesBackground from '../components/ParticlesBackground';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

// image imports
import Edgar from '../images/edgar-photo.jpg';

function Landing() {
  return (
    <div>
      <ParticlesBackground />
      <div className="container position-relative">
        <div className="d-flex justify-content-center pt-3">
          <nav className="nav text-white fs-4">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
            <Link className="nav-link text-white" to="/#about">
              About
            </Link>
            <Link className="nav-link text-white" to="#tech">
              Technologies
            </Link>
            <Link className="nav-link text-white" to="/#portfolio">
              Portfolio
            </Link>
            <Link className="nav-link text-white" to="/#skill">
              Skills & CV
            </Link>
            <Link className="nav-link text-white" to="/#contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="container position-relative min-vh-100 d-flex justify-content-center align-items-center">
        <div className="w-100 h-100  p-0 py-5">
          <div className="d-flex w-100">
            <img
              src={Edgar}
              alt="Edgar profile"
              className="rounded-circle mx-auto py-1 px-2"
              width={150}
              height={150}
            />
            <div className="w-100 px-2 py-2">
              <div className="text-white display-2">
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
      <div className="container position-relative min-vh-100">
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
      <div className="container position-relative min-vh-100 py-5 my-5">
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div className="w-100">
            <div className="text-white display-4 py-3 text-center py-5 w-100">
              Technologies
            </div>
            <div className="text-white py-3">
              <h4>PROTOTYPING AND WIREFRAMING</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PEN & PAPER
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  FIGMA
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  INVISION
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  ADOBE XD
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HOTGLOO
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>FRONTEND</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HTML
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  CSS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  VANILLA JS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REACT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  TYPESCRIPT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  APOLLO CLIENT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  NEXT JS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  VUE
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>BACKEND</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  NODEJS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  EXPRESS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PHP
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  LARAVEL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PYTHON
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DJANGO
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  RESTFUL APIS
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>MOBILE APPS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REACT NATIVE
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  IONIC
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  FLUTTER
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>CMS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  WORDPRESS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  SHOPIFY
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DRUPAL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  JOOMLA
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DATABASES</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  MONGODB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REDIS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  MYSQL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  POSTGRES
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>VERSION CONTROL</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GIT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GITHUB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GITLAB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  BITBUCKET
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DEV-OPS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  AWS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HEROKU
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DOCKERS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  LINODE
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DIGITAL OCEAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative min-vh-100 my-5 py-5">
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div className="w-100">
            <div className="text-white display-4 py-5 text-center">
              Skills & Resume
            </div>
            <div className="text-white py-3 fs-4">
              Download my full PDF resume here
            </div>
            <div className="d-flex text-white w-100 p-3">
              <h1 className="bi-list-nested display-1 px-2"></h1>
              <div className="py-1 px-3">
                <h2>Agile Development</h2>
                <p className="fs-4">
                  I have over 5 years experience working in Agile development
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-3">
              <h1 className="bi-person-bounding-box display-1 px-2"></h1>
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
              <h1 className="bi-people-fill display-1 px-2"></h1>
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
              <h1 className="bi-x-diamond-fill display-1 px-2"></h1>
              <div className="py-1 px-3">
                <h2>Pixel Perfect</h2>
                <p className="fs-4">
                  My designs are pixel perfect, with strong emphasis on user
                  empathy
                </p>
              </div>
            </div>
            <div className="d-flex text-white w-100 p-3">
              <h1 className="bi-columns-gap display-1 px-2"></h1>
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
          <div className="">
            <div className="card bg-transparent">
              <ul className="list-group list-group-flush bg-transparent fs-4">
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-4 col-sm-6">
                    Email <i className="bi-envelope-fill px-2"></i> :
                  </span>
                  <span className="col-sm-8 text-break">
                    tinka.edgar@gmail.com
                  </span>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Stackoverflow <i className="bi-stack-overflow px-2"></i> :
                  </span>
                  <span className="col-sm-8 text-break">
                    https://stackoverflow.com/users/6561907/edgar256
                  </span>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Linkedin <i className="bi-linkedin px-2"></i> :
                  </span>
                  <span className="col-sm-8 text-break">
                    https://www.linkedin.com/in/tinkamanyire-edgar/
                  </span>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Github <i className="bi-github px-2"></i> :
                  </span>
                  <span className="col-sm-8 text-break">
                    https://github.com/Edgar256
                  </span>
                </li>
                <li className="list-group-item bg-transparent text-white row">
                  <span className="col-sm-4">
                    Codewars <i className="bi-code-slash px-2"></i> :
                  </span>
                  <span className="col-sm-8 text-break">
                    https://www.codewars.com/users/Edgar256
                  </span>
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