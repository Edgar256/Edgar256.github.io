import React from "react";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";

import backend from "../data/backend";
import prototyping from "../data/prototyping";
import frontend from "../data/frontend";
import mobileapps from "../data/mobileapps";
import cms from "../data/cms";
import databases from "../data/databases";
import versioning from "../data/versioning";
import devops from "../data/devops";

export default function Technologies({isDark}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Determines when the element is considered in view
  });

  return (
    <Animated
      animationIn="zoomIn"
      animationOut="fadeOut"
      isVisible={inView}
      animationInDelay={5}
      animationInDuration={1500}
      className="w-100 h-100 d-flex align-items-center p-0"
    >
      <div ref={ref} className="w-100">
        <div className=" display-4 py-3 text-center py-5 w-100">
          Technologies
        </div>
        <div className=" py-3 text-center">
          <div className="fs-4">PROTOTYPING AND WIREFRAMING</div>
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
          <div className="fs-4">FRONTEND</div>
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
          <div className="fs-4">BACKEND</div>
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
          <div className="fs-4">MOBILE APPS</div>
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
          <div className="fs-4">CMS</div>
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
          <div className="fs-4">DATABASES</div>
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
          <div className="fs-4">VERSION CONTROL</div>
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
          <div className="fs-4">DEV-OPS</div>
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
    </Animated>
  );
}
