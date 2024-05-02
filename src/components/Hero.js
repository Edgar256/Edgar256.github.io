import Typewriter from "typewriter-effect";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";

const ImageComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Determines when the element is considered in view
  });
  
  return (
    <Animated
      animationIn="slideInLeft"
      animationOut="fadeOut"
      isVisible={inView}
      animationInDelay={5}
      animationInDuration={1500}
      className="d-sm-flex d-flex justify-content-sm-center justify-content-center"
    >
      <img
        ref={ref}
        src="./images/edgar-photo.webp"
        alt="Edgar profile"
        className="rounded-circle mx-auto py-2 px-2 "
        width={200}
        height={200}
      />
    </Animated>
  );
};

const TextComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Determines when the element is considered in view
  });
  return (
    <Animated
      animationIn="slideInRight"
      animationOut="fadeOut"
      isVisible={inView}
      animationInDelay={5}
      animationInDuration={1500}
      className="w-100 px-2 py-2 block-content"
    >
      <div ref={ref}>
        <div className="display-2 d-sm-flex justify-content-lg-start justify-content-sm-center text-xl-start text-lg-start text-md-center text-left text-sm-center">
          Hi, I'm Edgar Tinkamanyire,
        </div>
        <div className="fs-4">
          <Typewriter
            options={{
              strings: [
                "As a FullStack Software Engineer, I have expertise in both FrontEnd and BackEnd Development.",
                "I specialize in developing both Web and Mobile Applications.",
                "I am also passionate about tech writing and contribute to the Pixa Blog located at https://pixabits.net/blog/",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </Animated>
  );
};

export default function Hero() {
  return (
    <div className="container position-relative min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100 h-100  p-0 py-0">
        <div className="d-lg-flex w-100 d-sm-block">
          <ImageComponent />
          <TextComponent />
        </div>
      </div>
    </div>
  );
}
