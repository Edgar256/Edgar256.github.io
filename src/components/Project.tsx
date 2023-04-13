import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-100 h-100 px-0 row py-5 my-5 d-lg-flex d-sm-block">
      <div
        ref={ref}
        className={
          isVisible
            ? 'ease-in-text col-lg-6 col-sm-12 text-white py-1'
            : 'col-lg-6 col-sm-12 text-white py-1'
        }
      >
        <h2>{props.title}</h2>
        <h4>ROLE: {props.role}</h4>
        <div className="fs-4">{props.description}</div>
        <div>
          <h6 className="pt-4">TECH</h6>
          <div className="d-flex flex-wrap">
            {props.tech &&
              props.tech.map((elem) => (
                <button
                  className="btn btn-outline-secondary text-white rounded-pill m-1"
                  key={elem}
                >
                  {elem}
                </button>
              ))}
          </div>
        </div>
        <div className="d-flex flex-wrap py-5">
          <Link
            className="btn btn-outline-success rounded-pill m-1 px-3"
            to={`/project/${props.id}`}
          >
            VIEW MORE
          </Link>
          {props.websiteURL ? (
            <a
              href={props.websiteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary rounded-pill m-1 px-3"
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
              className="btn btn-outline-warning rounded-pill m-1 px-3"
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
            ? 'ease-in-image col-lg-6 col-sm-12 py-1'
            : 'col-lg-6 col-sm-12 py-1'
        }
      >
        <img
          src={props.photo}
          alt={props.title}
          className={
            isVisible
              ? 'ease-in-image w-100 p-2 rounded-custom text-white'
              : 'w-100 p-2 rounded-custom text-white'
          }
        />
      </div>
    </div>
  );
}
