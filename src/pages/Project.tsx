import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Image from '../components/Image';
import ParticlesBackground from '../components/ParticlesBackground';
import projects from '../data/projects';

// import ThemeContext
import { useThemeContext } from '../contexts/ContextProvider';

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
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      // Window is still at the top of the page height
      setIsAtTop(true);
      console.log('am at top');
    } else {
      // Window is not at the top of the page height
      setIsAtTop(false);
      console.log('am not at top');
    }
  };

  const onMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const project = projects.find((project) => project.id === parseInt(id));
    setProject([project]);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(ref.current);
    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, [id]);

  return (
    <div className={isDark ? 'text-white fw-normal' : 'text-dark fw-normal'} ref={homeRef}>
      {isDark ? <ParticlesBackground /> : <div />}
      <div className="container-fluid position-relative py-1 my-0 px-2">
        <div className="w-100 px-2 position-relative pb-3">
          <div
            className={
              isDark
                ? 'd-flex justify-content-between px-1 py-2 position-fixed w-100 bg-black'
                : 'd-flex justify-content-between px-1 py-2 position-fixed w-100 bg-white'
            }
          >
            <div className="d-flex">
              <Link to="/" className="p-0 fs-1">
                <i className="bi bi-arrow-left-circle-fill text-primary"></i>
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
        <div className="row d-lg-flex d-md-flex">
          <div
            ref={ref}
            className={
              isVisible ? 'ease-in-text col-lg-7  p-4' : 'col-lg-7  p-4'
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
                        ? 'btn btn-outline-light rounded-pill m-1 fw-bold'
                        : 'btn btn-outline-secondary rounded-pill m-1 fw-bold'
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
                      ? 'btn btn-outline-primary rounded-pill m-1 px-3 py-3 fw-bold'
                      : 'btn btn-primary rounded-pill m-1 px-3 py-3 fw-bold'
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
                      ? 'btn btn-outline-warning rounded-pill m-1 px-3 py-3 fw-bold'
                      : 'btn btn-warning rounded-pill m-1 px-3 py-3 fw-bold'
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
              isVisible ? 'ease-in-image col-lg-5  p-4' : 'col-lg-5  p-4'
            }
          >
            {project.length > 0 ? (
              <img
                src={'/' + project[0].profilePhoto}
                alt=""
                className="img-fluid rounded-custom"
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="p-2 ">
          <p className="fs-4 pt-5 mt-5">PERSONAL CONTRIBUTION TO THE PROJECT</p>
          <hr className="d-sm-block border border-white my-1" />
          <div>
            <ul>
              {project.length > 0 &&
                project[0].contribution.map((elem) => (
                  <li className="fs-4" key={elem}>
                    {elem}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="d-block p-xl-5 p-sm-2 my-2">
          {project.length > 0
            ? project[0].photos.map((photo) => {
                return <Image key={photo} photo={photo} />;
              })
            : ''}
        </div>
      </div>
      {!isAtTop && (
        <button
          onClick={() => handleScrollToSection(homeRef)}
          className="btn btn-primary rounded text-white shadow-sm m-0"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1050,
          }}
        >
          <i className="bi bi-arrow-up-circle px-0 text-white fs-2"></i>
        </button>
      )}
    </div>
  );
}
