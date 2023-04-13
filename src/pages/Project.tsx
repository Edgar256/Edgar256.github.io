import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../components/Image';
import ParticlesBackground from '../components/ParticlesBackground';
import projects from '../data/projects';

export default function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const project = projects.find((project) => project.id === parseInt(id));
    setProject([project]);
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div>
      <ParticlesBackground />
      <div className="container-fluid position-relative py-5 my-5 p-4">
        <h1 className="fs-1 text-white">
          Project {project.length > 0 && project[0].id}
        </h1>
        <hr className="d-sm-block border border-white my-1" />
        <div className="row d-lg-flex d-md-flex">
          <div
            ref={ref}
            className={
              isVisible
                ? 'ease-in-text col-lg-7 text-white p-4'
                : 'col-lg-7 text-white p-4'
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

            {/* <p className="fs-4">{project.length > 0 && project[0].roleRecap}</p> */}
            <div className="d-flex flex-wrap">
              {project.length > 0 &&
                project[0].tech.map((elem) => (
                  <button
                    className="btn btn-outline-secondary text-white rounded-pill m-1"
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
                  className="btn btn-outline-primary rounded-pill m-1 px-3"
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
            ref={ref}
            className={
              isVisible
                ? 'ease-in-image col-lg-5 text-white p-4'
                : 'col-lg-5 text-white p-4'
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
        <div className="p-2 text-white">
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
    </div>
  );
}
