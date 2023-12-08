import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import ThemeContext
import { useThemeContext } from "../contexts/ContextProvider";

export default function Project(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useThemeContext();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-4">
      <div
        className={
          props.count % 2 === 0
            ? "w-100 h-100 px-0 row py-5 my-5 d-lg-flex d-sm-block block-content"
            : "w-100 h-100 px-0 row py-5 my-5 d-lg-flex d-sm-block block-content flex-row-reverse"
        }
      >
        <div
          ref={ref}
          className={
            isVisible
              ? "ease-in-text col-lg-6 col-sm-12 py-1"
              : "col-lg-6 col-sm-12  py-1"
          }
        >
          <h2>{props.title}</h2>
          <div className="fs-4 fw-bold">ROLE: {props.role}</div>
          <div className="fs-4">{props.description}</div>
          <div>
            <p className="fs-4 pt-3 text-center fw-bold">Tech Stack/Tags</p>
            <div className="d-flex flex-wrap justify-content-center">
              {props.tech &&
                props.tech.map((elem) => (
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
          </div>
          <div className="d-flex flex-wrap justify-content-center py-5">
            <Link
              className={
                isDark
                  ? "btn btn-outline-success rounded-pill m-1 px-3 py-2 fw-bold"
                  : "btn btn-success rounded-pill m-1 px-3 py-2 fw-bold"
              }
              to={`/project/${props.id}`}
            >
              VIEW DETAILS
            </Link>
            {props.websiteURL ? (
              <a
                href={props.websiteURL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isDark
                    ? "btn btn-outline-primary rounded-pill m-1 px-3 py-2 fw-bold"
                    : "btn btn-primary rounded-pill m-1 px-3 py-2 fw-bold"
                }
              >
                VISIT WEBSITE
              </a>
            ) : (
              <div />
            )}
            {props.codeURL ? (
              <a
                href={props.codeURL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isDark
                    ? "btn btn-outline-warning rounded-pill m-1 px-3 py-2 fw-bold"
                    : "btn btn-warning rounded-pill m-1 px-3 py-2 fw-bold"
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
          className={
            isVisible
              ? "ease-in-image col-lg-6 col-sm-12 py-1"
              : "col-lg-6 col-sm-12 py-1"
          }
        >
          <img
            src={props.photo}
            alt={props.title}
            className={
              isVisible
                ? "ease-in-image w-100 p-2 rounded-custom "
                : "w-100 p-2 rounded-custom "
            }
          />
        </div>
      </div>
    </div>
  );
}
