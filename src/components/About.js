import React from "react";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";

export default function About() {
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
      className="container-fluid position-relative min-vh-100 p-xl-5"
    >
      <div
        ref={ref}
        className="w-100 h-100 d-flex justify-content-center align-items-center p-0"
      >
        <div>
          <div className=" display-4 py-2 text-center">About</div>
          <div className=" text-center py-2 fs-4">
            <p>
              As a seasoned Senior Software Engineer with extensive experience
              in Agile processes and a strong foundation in both front-end and
              back-end technologies, my expertise lies in software development.
              I have a wealth of knowledge in both relational (MySQL, Postgres)
              and non-relational (MongoDB) databases, as well as React JS, React
              Native, Node JS, Laravel, GraphQl, NextJS, Vanilla JS, and Java.
              My proficiency with RESTful APIs, CMSs such as WordPress and
              Drupal, graphic design, and wireframing allows me to provide my
              clients with the best possible results. I strive to remain
              up-to-date with emerging technologies to ensure that I stay ahead
              of the curve.
            </p>
            <p>
              As a Freelance FullStack Developer, I specialize in transforming
              ideas into robust, scalable web and mobile apps, all while
              adhering to the highest engineering principles. Throughout my
              career, I have played an instrumental role in converting concepts
              into reality. My philosophy is that every problem requires a
              unique solution, and this mindset has contributed to my success
              and the success of my teams. If you have an idea that you want to
              convert into a web or mobile app, please don't hesitate to get in
              touch with me. I am confident that my expertise and experience
              will help you achieve your goals and bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
}
