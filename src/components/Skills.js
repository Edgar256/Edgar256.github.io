import React from "react";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";

export default function Skills() {
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
      <div className="w-100" ref={ref}>
        <div className="display-4 py-5 text-center">Skills & Resume</div>
        <div className=" py-3 fs-4 text-center">
          <a
            href="./images/EDGAR TINKAMANYIRE RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
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
              For the last 5 years , I have hard an opportunity to lead a team
              of my own. I have a lot of experience working with other people in
              a team both in-house and remotely.
            </p>
          </div>
        </div>
        <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
          <p className="bi-people-fill display-1 px-2"></p>
          <div className="py-1 px-3">
            <h2>Collaboration Skills</h2>
            <p className="fs-4">
              I boast off a vast experience in major collaboration tools like
              Slack for communication, Invision & Figma for prototyping and
              wireframing, Postman & Swagger for API documentation, Git for
              version control.
            </p>
          </div>
        </div>
        <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
          <p className="bi-x-diamond-fill display-1 px-2"></p>
          <div className="py-1 px-3">
            <h2>Pixel Perfect</h2>
            <p className="fs-4">
              My designs are pixel perfect, with strong emphasis on user empathy
            </p>
          </div>
        </div>
        <div className="d-block d-lg-flex d-xl-flex w-100 p-4 block-content">
          <p className="bi-columns-gap display-1 px-2"></p>
          <div className="py-1 px-3">
            <h2>Responsive Design</h2>
            <p className="fs-4">
              All the website apps I build are fully mobile responsive across
              all devices.
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
}
