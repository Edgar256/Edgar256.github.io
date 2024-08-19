import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Image from "../components/Image";
import ParticlesBackground from "../components/ParticlesBackground";
import projects from "../data/projects";
import SimpleImageSlider from "react-simple-image-slider";

// import ThemeContext
import { useThemeContext } from "../contexts/ContextProvider";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

export default function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark, toggleTheme } = useThemeContext();
  const [isChecked, setIsChecked] = useState(isDark);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const homeRef = useRef<HTMLDivElement>(null);
  const [imagesArray, setImagesArray] = useState([]);

  // State to hold the width and height of the slider
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.6,
    height: window.innerWidth * 0.6 * 0.5625,
  });

  // Function to update dimensions
  const updateDimensions = () => {
    const width = window.innerWidth * 0.7; // 90% of viewport width
    const height = width * 0.7625; // Maintain 16:9 aspect ratio
    setDimensions({ width, height });
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

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      // Window is still at the top of the page height
      console.log("am at top");
    } else {
      // Window is not at the top of the page height
      setIsAtTop(false);
    }
  };

  const onMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const generateImagesArray = async (project) => {
    try {
      let arr = [];
      if (project.profilePhoto) {
        let imgURL = project.profilePhoto;
        imgURL = imgURL.replace("images/", "/images/");
        arr.push(imgURL);
      }

      project.photos.map((photo) => {
        arr.push(`/images/${photo}`);
      });
      return setImagesArray(arr);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    const project = projects.find((project) => project.id === parseInt(id));
    setProject([project]);

    generateImagesArray(project);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(ref.current);
    window.addEventListener("mousemove", onMouseMove);

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", updateDimensions);
    window.removeEventListener("resize", updateDimensions);

    console.log("I loadedt this page");
    handleScrollToSection(homeRef)

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, [id]);

  return (
    <div
      className={isDark ? "text-white fw-normal" : "text-dark fw-normal"}
      ref={homeRef}
    >
      {isDark ? <ParticlesBackground /> : <div />}
      <div className="container-fluid position-relative py-1 my-0 px-2">
        <div className="w-100 px-2 position-relative pb-3">
          <div
            className={
              isDark
                ? "d-flex justify-content-between px-1 py-2 position-fixed w-100 bg-black"
                : "d-flex justify-content-between px-1 py-2 position-fixed w-100 bg-white"
            }
          >
            <div className="d-flex">
              <Link to="/" className="p-0 fs-1">
                <i className="bi bi-chevron-left text-primary"></i>
              </Link>
              <h1 className="fs-1 px-2 py-1">
                Project {project.length > 0 && project[0].id}
              </h1>
            </div>
            <div className="px-4">
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
            </div>
          </div>
        </div>
        <hr className="d-sm-block border border-white my-1 mt-5" />

        <div>
          <div className="row d-lg-flex d-md-flex">
            <div className="col-lg-12  p-4">
              <div className="d-flex">
                <div className="mx-auto" style={{ maxWidth: "100%" }}>
                  <div>
                    {imagesArray.length > 0 && (
                      <SimpleImageSlider
                        width={dimensions.width}
                        height={dimensions.height}
                        images={imagesArray}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        autoPlayDelay={2.0}
                        bgColor={!isChecked ? "#ffffff" : "#000000"}
                        // style={{ width: "100%", height: "auto" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-lg-flex d-md-flex text-center">
          <div
            ref={ref}
            className={
              isVisible ? "ease-in-text col-lg-12  p-5" : "col-lg-12  p-5"
            }
          >
            <h2 className="fs-3">{project.length > 0 && project[0].name}</h2>
            <p className="fs-4 pt-3">
              ROLE: {project.length > 0 && project[0].role}
            </p>
            <hr className="d-sm-block border border-white my-1" />
            <p className="fs-4">
              {project.length > 0 && project[0].descriptionFull}
            </p>
            <div className="d-flex flex-wrap justify-content-center pb-3">
              {project.length > 0 &&
                project[0].tech.map((elem) => (
                  <button
                    className={
                      isDark
                        ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                        : "btn btn-outline-secondary rounded-pill m-1 fw-bold"
                    }
                    key={elem}
                  >
                    {elem}
                  </button>
                ))}
            </div>
            <div>
              {project.length > 0 && project[0].websiteURL ? (
                <a
                  href={project[0].websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "btn btn-outline-primary rounded-pill m-1 px-3 py-3 fw-bold"
                      : "btn btn-primary rounded-pill m-1 px-3 py-3 fw-bold"
                  }
                >
                  VISIT WEBSITE
                </a>
              ) : (
                <div />
              )}
              {project.length > 0 && project[0].codeURL ? (
                <a
                  href={project[0].codeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "btn btn-outline-warning rounded-pill m-1 px-3 py-3 fw-bold"
                      : "btn btn-warning rounded-pill m-1 px-3 py-3 fw-bold"
                  }
                >
                  VIEW GITHUB REPO
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
        {/* <div className="row d-lg-flex d-md-flex">
          <div
            ref={ref}
            className={
              isVisible ? "ease-in-text col-lg-7  p-4" : "col-lg-7  p-4"
            }
          >
            <h2 className="fs-3">{project.length > 0 && project[0].name}</h2>
            <p className="fs-4 pt-3">
              ROLE: {project.length > 0 && project[0].role}
            </p>
            <hr className="d-sm-block border border-white my-1" />
            <p className="fs-4">
              {project.length > 0 && project[0].descriptionFull}
            </p>
            <div className="d-flex flex-wrap">
              {project.length > 0 &&
                project[0].tech.map((elem) => (
                  <button
                    className={
                      isDark
                        ? "btn btn-outline-light rounded-pill m-1 fw-bold"
                        : "btn btn-outline-secondary rounded-pill m-1 fw-bold"
                    }
                    key={elem}
                  >
                    {elem}
                  </button>
                ))}
            </div>
            <div>
              {project.length > 0 && project[0].websiteURL ? (
                <a
                  href={project[0].websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "btn btn-outline-primary rounded-pill m-1 px-3 py-3 fw-bold"
                      : "btn btn-primary rounded-pill m-1 px-3 py-3 fw-bold"
                  }
                >
                  VISIT WEBSITE
                </a>
              ) : (
                <div />
              )}
              {project.length > 0 && project[0].codeURL ? (
                <a
                  href={project[0].codeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "btn btn-outline-warning rounded-pill m-1 px-3 py-3 fw-bold"
                      : "btn btn-warning rounded-pill m-1 px-3 py-3 fw-bold"
                  }
                >
                  VIEW GITHUB REPO
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
          <div
            ref={ref}
            className={
              isVisible ? "ease-in-image col-lg-5  p-4" : "col-lg-5  p-4"
            }
          >
            {project.length > 0 ? (
              <img
                src={"/" + project[0].profilePhoto}
                alt=""
                className="img-fluid rounded-custom"
              />
            ) : (
              ""
            )}
          </div>
        </div> */}
        <div className="p-2 ">
          <p className="fs-4 pt-5 mt-5 text-center">
            PERSONAL CONTRIBUTION TO THE PROJECT
          </p>
          <hr className="d-sm-block border border-white my-1" />
          <div>
            <ul
              className="centered-list text-center"
              style={{ listStyleType: "none", paddingLeft: 0 }}
            >
              {project.length > 0 &&
                project[0].contribution.map((elem) => (
                  <li className="fs-4 py-3" key={elem}>
                    <i className="bi bi-airplane-fill"></i> {elem}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center">
            <div className={isVisible ? "ease-in-image w-100" : "w-100"}>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center">
            <div className={isVisible ? "ease-in-image w-100" : "w-100"}>
              <ContactDetails isDark={isDark} />
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
