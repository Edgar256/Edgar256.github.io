import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import projects from '../data/projects';

export default function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    const project = projects.find((project) => project.id === parseInt(id));
    setProject([project]);
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
          <div className="col-lg-7 text-white p-4">
            <h2 className="fs-3">{project.length > 0 && project[0].name}</h2>
            <p className="fs-4">
              {project.length > 0 && project[0].description}
            </p>
            <p className="fs-4 pt-3">
              ROLE: {project.length > 0 && project[0].role}
            </p>
            <hr className="d-sm-block border border-white my-1" />
            <p className="fs-4">{project.length > 0 && project[0].roleRecap}</p>
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
            <p className="fs-4 pt-3">PERSONAL CONTRIBUTION TO THE PROJECT</p>
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
          <div className="col-lg-5 text-white p-4">
            {project.length > 0 ? (
              <img
                src={'/' + project[0].profilePhoto}
                alt=""
                className="img-fluid"
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="d-block p-xl-5 p-sm-2 my-2">
          {project.length > 0
            ? project[0].photos.map((photo) => {
                return (
                  <div key={photo} className="p-xl-5 p-sm-2 my-2">
                    <img
                      src={'/images/' + photo}
                      alt={photo}
                      className="img-fluid_ w-100"
                    />
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}
