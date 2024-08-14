import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import Form from "react-bootstrap/Form";

// component imports
import Project from "../components/Project";

// import data dumps
import techStack from "../data/techStack";
import data from "../data/projects";

// import ThemeContext
import { useThemeContext } from "../contexts/ContextProvider";
import Hero from "../components/Hero";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  const [activeFilter, setActiveFilter] = useState("all");

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
  const reviewsRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      // Window is still at the top of the page height
      setIsAtTop(true);
    } else {
      // Window is not at the top of the page height
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    setIsVisible(false);
    setActiveProjects(data);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    } catch (error) {}
  };

  return (
    <div
      className={isDark ? "text-white fw-normal" : "text-dark fw-normal"}
      ref={homeRef}
    >
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
                    onClick={() => handleScrollToSection(reviewsRef)}
                  >
                    Reviews
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
                    Hire Me
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
                id="viewMode"
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
              <label htmlFor="viewMode" className="visually-hidden">
                Dark/Light Mode Switch
              </label>
            </Form>
          </nav>
        </div>
      </div>
      <Hero />
      <div id="about">
        <div ref={aboutRef}></div>
      </div>
      <About />

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

        {activeProjects.map((project, index) => {
          return (
            <Project
              key={index}
              count={index}
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
        <Technologies isDark={isDark} />
      </div>

      <div
        className="container-fluid position-relative min-vh-100 my-5 py-5 p-xl-5"
        id="skill"
        ref={skillsRef}
      >
        <Skills />
      </div>

      <div
        className="container position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center"
        ref={formRef}
        id="formId"
      >
        <div
          // ref={formRef}
          className={isVisible ? "ease-in-image w-100" : "w-100"}
        >
          <ContactForm />
        </div>
      </div>

      <div className="container" ref={reviewsRef}>
        <ReviewsSection />
      </div>

      <div className="container">
        <div
          className="position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center"
          ref={contactRef}
        >
          <div className={isVisible ? "ease-in-image w-100" : "w-100"}>
            <ContactDetails isDark={isDark} />
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
