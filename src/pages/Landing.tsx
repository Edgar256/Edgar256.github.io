import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import Typewriter from 'typewriter-effect';
import Form from 'react-bootstrap/Form';

// component imports
import Project from '../components/Project';

// import data dumps
import techStack from '../data/techStack';
import data from '../data/projects';
import backend from '../data/backend';
import prototyping from '../data/prototyping';
import frontend from '../data/frontend';
import mobileapps from '../data/mobileapps';
import cms from '../data/cms';
import databases from '../data/databases';
import versioning from '../data/versioning';
import devops from '../data/devops';

// import ThemeContext
import { useThemeContext } from '../contexts/ContextProvider';

function Landing() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProjects, setActiveProjects] = useState([]);
  const { isDark, toggleTheme } = useThemeContext();
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = async () => {
    try {
      await setIsChecked(!isChecked);
      await toggleTheme();
      return;
    } catch (error) {
      throw error;
    }
  };

  const onMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    window.addEventListener('mousemove', onMouseMove);
    setActiveProjects(data);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  const setActiveProjectFilter = async (filter) => {
    try {
      if (!filter && typeof filter !== 'string') return false;
      let filterValue = filter.toLowerCase();
      setActiveFilter(filterValue);
      if (filter === 'all') return setActiveProjects(data);
      const selectedProjects = data.filter((item) =>
        item.tech.some((tech) =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
      return setActiveProjects(selectedProjects);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={isDark ? 'text-white fw-normal' : 'text-dark fw-normal'}>
      {isDark ? <ParticlesBackground /> : <div />}
      <div
        className={
          isDark
            ? 'container-fluid nav-area bg-black'
            : 'container-fluid nav-area bg-white'
        }
      >
        <div
          className="d-flex justify-content-lg-center justify-content-sm-start pt-3"
          id="home"
        >
          <nav className="navbar navbar-expand-lg navbar-white bg-transparent ">
            <button
              className="navbar-toggler  bg-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse w-100 bg-transparent"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav w-100">
                <hr className="d-md-none d-sm-block border border-dark my-1" />
                <li className="nav-item active">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="/#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="/#tech"
                  >
                    Technologies
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="/#skill"
                  >
                    Skills & CV
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <a
                    className={
                      isDark
                        ? 'nav-link  fs-4 px-3 text-white fw-bold'
                        : 'nav-link  fs-4 px-3 text-dark fw-bold'
                    }
                    href="/#contact"
                  >
                    Contact
                  </a>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
              </ul>
            </div>
            <Form>
              <Form.Check
                type="switch"
                checked={isChecked}
                onChange={handleToggle}
                label={
                  <span className="Form-switch-label">
                    {isChecked ? (
                      <span className="dark-mode-label">
                        <small>
                          Dark
                          <br /> Mode
                        </small>
                      </span>
                    ) : (
                      <span className="light-mode-label">
                        <small>Light Mode</small>
                      </span>
                    )}
                  </span>
                }
              />
            </Form>
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
                className="rounded-circle mx-auto py-1 px-2 "
                width={150}
                height={150}
              />
            </div>
            <div className="w-100 px-2 py-2 ">
              <div className="display-2 d-sm-flex justify-content-lg-start justify-content-sm-center text-xl-start text-lg-start text-md-start text-left text-sm-center">
                Hi, I'm Edgar Tinkamanyire,
              </div>
              <div className="fs-4">
                <Typewriter
                  options={{
                    strings: [
                      'As a FullStack Software Engineer, I have expertise in both FrontEnd and BackEnd Development.',
                      'I specialize in developing Web and Mobile Applications.',
                      'I am also passionate about tech writing and contribute to the Pixa Blog located at https://pixabits.net/blog/',
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
          <div ref={ref} className={isVisible ? 'ease-in-text' : ''}>
            <div className=" display-4 py-5 text-center">About</div>
            <div className=" text-center py-5 fs-4">
              <p>
                As a seasoned Senior Software Engineer with extensive experience
                in Agile processes and a strong foundation in both front-end and
                back-end technologies, my expertise lies in software
                development. I have a wealth of knowledge in both relational
                (MySQL, Postgres) and non-relational (MongoDB) databases, as
                well as React JS, React Native, Node JS, Laravel, GraphQl,
                NextJS, Vanilla JS, and Java. My proficiency with RESTful APIs,
                CMSs such as WordPress and Drupal, graphic design, and
                wireframing allows me to provide my clients with the best
                possible results. I strive to remain up-to-date with emerging
                technologies to ensure that I stay ahead of the curve.
              </p>
              <p>
                As a Freelance FullStack Developer, I specialize in transforming
                ideas into robust, scalable web and mobile apps, all while
                adhering to the highest engineering principles. Throughout my
                career, I have played an instrumental role in converting
                concepts into reality. My philosophy is that every problem
                requires a unique solution, and this mindset has contributed to
                my success and the success of my teams. If you have an idea that
                you want to convert into a web or mobile app, please don't
                hesitate to get in touch with me. I am confident that my
                expertise and experience will help you achieve your goals and
                bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-relative min-vh-100 p-xl-5"
        id="portfolio"
      >
        <div className="w-100">
          <div className=" display-4 py-3 text-center py-5 w-100">
            Portfolio
          </div>
        </div>
        <div className="text-center fs-4  py-2">
          Filter projects by technology or tag {'  '}({activeProjects.length})
        </div>
        <div>
          {isDark ? (
            <div className="d-flex justify-content-center flex-wrap">
              {techStack.map((tech) => (
                <button
                  className={
                    activeFilter === tech.toLowerCase()
                      ? 'btn btn-primary rounded-pill m-1 fw-bold'
                      : 'btn btn-outline-light  rounded-pill m-1 fw-bold'
                  }
                  onClick={() => setActiveProjectFilter(tech.toLowerCase())}
                  key={tech}
                >
                  {tech}
                </button>
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center flex-wrap">
              {techStack.map((tech) => (
                <button
                  className={
                    activeFilter === tech.toLowerCase()
                      ? 'btn btn-primary rounded-pill m-1 fw-bold'
                      : 'btn btn-outline-secondary rounded-pill m-1 fw-bold'
                  }
                  onClick={() => setActiveProjectFilter(tech.toLowerCase())}
                  key={tech}
                >
                  {tech}
                </button>
              ))}
            </div>
          )}
        </div>

        {activeProjects.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.name}
              role={project.role}
              description={project.description}
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
          <div
            ref={ref}
            className={isVisible ? 'ease-in-image w-100' : 'w-100'}
          >
            <div className=" display-4 py-3 text-center py-5 w-100">
              Technologies
            </div>
            <div className=" py-3">
              <h4>PROTOTYPING AND WIREFRAMING</h4>
              <div className="d-flex flex-wrap">
                {prototyping &&
                  prototyping.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>FRONTEND</h4>
              <div className="d-flex flex-wrap">
                {frontend &&
                  frontend.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>BACKEND</h4>
              <div className="d-flex flex-wrap">
                {backend &&
                  backend.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>MOBILE APPS</h4>
              <div className="d-flex flex-wrap">
                {mobileapps &&
                  mobileapps.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>CMS</h4>
              <div className="d-flex flex-wrap">
                {cms &&
                  cms.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>DATABASES</h4>
              <div className="d-flex flex-wrap">
                {databases &&
                  databases.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>VERSION CONTROL</h4>
              <div className="d-flex flex-wrap">
                {versioning &&
                  versioning.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" py-3">
              <h4>DEV-OPS</h4>
              <div className="d-flex flex-wrap">
                {devops &&
                  devops.map((elem) => (
                    <button
                      className="btn btn-outline-secondary  rounded-pill m-1"
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
          <div
            ref={ref}
            className={isVisible ? 'ease-in-image w-100' : 'w-100'}
          >
            <div className=" display-4 py-5 text-center">Skills & Resume</div>
            <div className=" py-3 fs-4" id="skill">
              <a
                href="./images/EDGAR TINKAMANYIRE RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my full PDF resume here
              </a>
            </div>
            <div className="d-flex  w-100 p-4">
              <p className="bi-list-nested display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Agile Development</h2>
                <p className="fs-4">
                  I have over 5 years experience working in Agile development
                </p>
              </div>
            </div>
            <div className="d-flex  w-100 p-4">
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
            <div className="d-flex  w-100 p-3">
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
            <div className="d-flex  w-100 p-3">
              <p className="bi-x-diamond-fill display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Pixel Perfect</h2>
                <p className="fs-4">
                  My designs are pixel perfect, with strong emphasis on user
                  empathy
                </p>
              </div>
            </div>
            <div className="d-flex  w-100 p-3">
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
        <div ref={ref} className={isVisible ? 'ease-in-image w-100' : 'w-100'}>
          <div className=" display-4 py-5 text-center py-5">Contact</div>
          <div className="" id="contact">
            <div className="card bg-transparent">
              <ul className="list-group list-group-flush bg-transparent fs-4">
                <li className="list-group-item bg-transparent  row">
                  <span className="col-4 col-sm-6">
                    Email <i className="bi-envelope-fill px-2 text-warning"></i>{' '}
                    :
                  </span>
                  <Link
                    className="col-sm-8 text-break  text-decoration-none text-muted"
                    to="mailto:tinka.edgar@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tinka.edgar@gmail.com
                  </Link>
                </li>
                <li className="list-group-item bg-transparent  row">
                  <span className="col-sm-4">
                    Stackoverflow{' '}
                    <i className="bi-stack-overflow px-2 text-danger"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break  text-decoration-none text-muted"
                    to="https://stackoverflow.com/users/6561907/edgar256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stackoverflow.com/users/6561907/edgar256
                  </Link>
                </li>
                <li className="list-group-item bg-transparent  row">
                  <span className="col-sm-4">
                    Linkedin <i className="bi-linkedin px-2 text-info"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break  text-decoration-none text-muted"
                    to="https://www.linkedin.com/in/tinkamanyire-edgar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/tinkamanyire-edgar/
                  </Link>
                </li>
                <li className="list-group-item bg-transparent  row">
                  <span className="col-sm-4">
                    Github <i className="bi-github px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break  text-decoration-none text-muted"
                    to="https://github.com/Edgar256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Edgar256
                  </Link>
                </li>
                <li className="list-group-item bg-transparent  row">
                  <span className="col-sm-4">
                    Codewars <i className="bi-code-slash px-2"></i> :
                  </span>
                  <Link
                    className="col-sm-8 text-break  text-decoration-none text-muted"
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
