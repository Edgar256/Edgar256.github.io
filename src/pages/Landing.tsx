import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import Typewriter from "typewriter-effect";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import { Spinner } from "react-bootstrap";

// component imports
import Project from "../components/Project";

// import data dumps
import techStack from "../data/techStack";
import data from "../data/projects";
import backend from "../data/backend";
import prototyping from "../data/prototyping";
import frontend from "../data/frontend";
import mobileapps from "../data/mobileapps";
import cms from "../data/cms";
import databases from "../data/databases";
import versioning from "../data/versioning";
import devops from "../data/devops";

// import ThemeContext
import { useThemeContext } from "../contexts/ContextProvider";

function Landing() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [activeProjects, setActiveProjects] = useState([]);
  const { isDark, toggleTheme } = useThemeContext();
  const [isChecked, setIsChecked] = useState(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    if (sectionRef.current) {
      const topOffset = sectionRef.current.getBoundingClientRect().top;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = topOffset + scrollTop - 100;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

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

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      // Window is still at the top of the page height
      setIsAtTop(true);
      console.log("am at top");
    } else {
      // Window is not at the top of the page height
      setIsAtTop(false);
      console.log("am not at top");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    window.addEventListener("mousemove", onMouseMove);
    setActiveProjects(data);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  const [state, handleSubmit] = useForm("mjvqqbak");

  if (state.succeeded) {
    return (
      <div>
        <div className="w-100 d-flex p-3 py-5">
          <p className="alert alert-success text-center mx-auto fs-4">
            "Your message has been successfully sent. I will be contacting you
            shortly"
          </p>
        </div>
        <div className="w-100 p-3 d-flex my-5">
          <button
            onClick={handleReload}
            className="btn btn-primary mx-auto rounded-pill fs-4"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  const setActiveProjectFilter = async (filter) => {
    try {
      if (!filter && typeof filter !== "string") return false;
      let filterValue = filter.toLowerCase();
      setActiveFilter(filterValue);
      if (filter === "all") return setActiveProjects(data);
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
    <div className={isDark ? "text-white fw-normal" : "text-dark fw-normal"}>
      {isDark ? <ParticlesBackground /> : <div />}
      <div
        className={
          isDark
            ? "container-fluid nav-area bg-black"
            : "container-fluid nav-area bg-white"
        }
      >
        <div
          className="d-flex justify-content-lg-center justify-content-sm-start pt-3"
          id="home"
        >
          <nav className="navbar navbar-expand-lg navbar-white bg-transparent ">
            <button
              className="navbar-toggler bg-white"
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
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(homeRef)}
                  >
                    Home
                  </span>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(aboutRef)}
                  >
                    About
                  </span>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(portfolioRef)}
                  >
                    Portfolio
                  </span>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(techRef)}
                  >
                    Technologies
                  </span>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(skillsRef)}
                  >
                    Skills & CV
                  </span>
                </li>
                <hr className="d-md-none d-sm-block border border-white my-1" />
                <li className="nav-item">
                  <span
                    className={
                      isDark
                        ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                        : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    }
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(contactRef)}
                  >
                    Contact
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    // className={
                    //   isDark
                    //     ? "nav-link  fs-4 px-3 text-white fw-bold cursor-link"
                    //     : "nav-link  fs-4 px-3 text-dark fw-bold cursor-link"
                    // }
                    className="btn btn-success fw-bold cursor-link fs-4 mx-2 rounded-pill"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    onClick={() => handleScrollToSection(formRef)}
                  >
                    Send Me A Quick Message
                  </span>
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
      <div
        className="container position-relative min-vh-100 d-flex justify-content-center align-items-center"
        ref={homeRef}
      >
        <div className="w-100 h-100  p-0 py-0">
          <div className="d-lg-flex w-100 d-sm-block">
            <div className="d-sm-flex d-flex justify-content-sm-center justify-content-center">
              <img
                src="./images/edgar-photo.jpg"
                alt="Edgar profile"
                className="rounded-circle mx-auto py-2 px-2 "
                width={150}
                height={150}
              />
            </div>
            <div className="w-100 px-2 py-2 block-content">
              <div className="display-2 d-sm-flex justify-content-lg-start justify-content-sm-center text-xl-start text-lg-start text-md-center text-left text-sm-center">
                Hi, I'm Edgar Tinkamanyire,
              </div>
              <div className="fs-4">
                <Typewriter
                  options={{
                    strings: [
                      "As a FullStack Software Engineer, I have expertise in both FrontEnd and BackEnd Development.",
                      "I specialize in developing Web and Mobile Applications.",
                      "I am also passionate about tech writing and contribute to the Pixa Blog located at https://pixabits.net/blog/",
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
        <div
          className="w-100 h-100 d-flex justify-content-center align-items-center p-0"
          ref={aboutRef}
        >
          <div ref={ref} className={isVisible ? "ease-in-text" : ""}>
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
        ref={portfolioRef}
      >
        <div className="w-100">
          <div className=" display-4 py-2 text-center w-100">Portfolio</div>
        </div>
        <div className="text-center fs-4  py-2">
          Filter projects by technology or tag {"  "}({activeProjects.length})
        </div>
        <div>
          {isDark ? (
            <div className="d-flex justify-content-center flex-wrap">
              {techStack.map((tech) => (
                <button
                  className={
                    activeFilter === tech.toLowerCase()
                      ? "btn btn-primary rounded-pill m-1 fw-bold"
                      : "btn btn-outline-light  rounded-pill m-1 fw-bold"
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
                      ? "btn btn-primary rounded-pill m-1 fw-bold"
                      : "btn btn-outline-secondary rounded-pill m-1 fw-bold"
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
        ref={techRef}
      >
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div
            ref={ref}
            className={isVisible ? "ease-in-image w-100" : "w-100"}
          >
            <div className=" display-4 py-3 text-center py-5 w-100">
              Technologies
            </div>
            <div className=" py-3 text-center">
              <h4>PROTOTYPING AND WIREFRAMING</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {prototyping &&
                  prototyping.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>FRONTEND</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {frontend &&
                  frontend.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>BACKEND</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {backend &&
                  backend.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>MOBILE APPS</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {mobileapps &&
                  mobileapps.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>CMS</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {cms &&
                  cms.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>DATABASES</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {databases &&
                  databases.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>VERSION CONTROL</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {versioning &&
                  versioning.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
                      key={elem}
                    >
                      {elem}
                    </button>
                  ))}
              </div>
            </div>
            <div className="py-3 text-center">
              <h4>DEV-OPS</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {devops &&
                  devops.map((elem) => (
                    <button
                      className={
                        isDark
                          ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                          : "btn btn-outline-secondary  rounded-pill m-1 fw-bold"
                      }
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

      <div
        className="container-fluid position-relative min-vh-100 my-5 py-5 p-xl-5"
        id="skill"
        ref={skillsRef}
      >
        <div className="w-100 h-100 d-flex align-items-center p-0">
          <div
            ref={ref}
            className={isVisible ? "ease-in-image w-100" : "w-100"}
          >
            <div className="display-4 py-5 text-center">Skills & Resume</div>
            <div className=" py-3 fs-4 text-center">
              <a
                href="./images/EDGAR TINKAMANYIRE RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my full PDF resume here
              </a>
            </div>
            <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
              <p className="bi-list-nested display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Agile Development</h2>
                <p className="fs-4">
                  I have over 5 years experience working in Agile development
                </p>
              </div>
            </div>
            <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
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
            <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
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
            <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
              <p className="bi-x-diamond-fill display-1 px-2"></p>
              <div className="py-1 px-3">
                <h2>Pixel Perfect</h2>
                <p className="fs-4">
                  My designs are pixel perfect, with strong emphasis on user
                  empathy
                </p>
              </div>
            </div>
            <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
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

      <div
        className="container position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center"
        ref={formRef}
        id="formId"
      >
        <div ref={ref} className={isVisible ? "ease-in-image w-100" : "w-100"}>
          <div className=" display-4 text-center py-1">
            Send me a Quick Message
          </div>
          <div className="text-center fs-4">
            Awaiting your message for prompt discussion on your important
            project. Thank you for your inquiry
          </div>
          <div className="pt-2 w-100 d-flex">
            <form
              onSubmit={handleSubmit}
              className="col-12 col-lg-6 col-xl-6  mx-auto"
              method="POST"
            >
              <div className="py-1">
                <label htmlFor="email" className="fs-4 w-100">
                  Email Address:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control fs-4"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="py-1">
                <label htmlFor="title" className="fs-4 w-100">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="form-control fs-4"
                />
                <ValidationError
                  prefix="Title"
                  field="title"
                  errors={state.errors}
                />
              </div>
              <div className="py-1">
                <label htmlFor="message" className="fs-4 w-100">
                  Message body:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control fs-4"
                  rows={8}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="g-recaptcha"></div>
              {loading ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary fs-4 px-5 my-2 rounded-pill"
                >
                  SEND MESSAGE
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center"
          ref={contactRef}
        >
          <div
            ref={ref}
            className={isVisible ? "ease-in-image w-100" : "w-100"}
          >
            <div className=" display-4 py-5 text-center py-5">Contact</div>
            <div className="" id="contact">
              <div className="card bg-transparent">
                <ul className="list-group list-group-flush bg-transparent fs-4">
                  <li className="list-group-item bg-transparent row text-lg-start text-center py-3">
                    <span className="col-4 col-sm-6">
                      Email{" "}
                      <i className="bi-envelope-fill px-2 text-warning"></i> :
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
                  <li className="list-group-item bg-transparent row text-lg-start text-center py-3">
                    <span className="col-sm-4">
                      Stackoverflow{" "}
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
                  <li className="list-group-item bg-transparent row text-lg-start text-center py-3">
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
                  <li className="list-group-item bg-transparent row text-lg-start text-center py-3">
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
                  <li className="list-group-item bg-transparent row text-lg-start text-center py-3">
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
              <div className="py-5 my-5 text-center">
                <footer
                  className={
                    isDark ? "text-white fw-normal" : "text-dark fw-normal"
                  }
                >
                  <p>&copy; 2023 Edgar Tinkamanyire. All rights reserved.</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isAtTop && (
        <button
          onClick={() => handleScrollToSection(homeRef)}
          className="btn btn-primary rounded text-white shadow-sm m-0"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1050,
          }}
        >
          <i className="bi bi-arrow-up-circle px-0 text-white fs-2"></i>
        </button>
      )}
    </div>
  );
}

export default Landing;
