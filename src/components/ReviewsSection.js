import ReviewsCarousel from "./ReviewsCarousel";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";

const reviews = [
  {
    author: "Kirunda Brian",
    img: "brian.jpg",
    title:
      "Software Developer passionate about Web3, AI, and Blockchain, with expertise in Cybersecurity, React, TypeScript, and WordPress",
    relationship: "Kirunda worked with Edgar on the same team",
    comment:
      "I had the pleasure of working closely with Edgar on a complex software development project, and I am truly impressed by his technical prowess and problem-solving skills. Edgar's dedication to writing clean, efficient code and his ability to tackle challenges with a strategic mindset make him an invaluable asset to any development team. His collaborative spirit and strong communication skills further enhance his effectiveness. I highly recommend Edgar for any software development endeavor; he is a true professional who consistently delivers outstanding results.",
  },
  {
    author: "Ian Ankunda",
    img: "ian.jpg",
    title: "Java Software Developer",
    relationship: "Ian worked with Edgar on the same team",
    comment:
      "I highly recommend Edgar for his exceptional contributions as a Software Engineer. He consistently delivers high-quality solutions, showcases a proactive mindset, and adapts well to new technologies. Edgar is not only technically proficient but also a collaborative team player with strong communication skills. His reliability, ownership of work, and dedication make him an invaluable asset to any team or project. Edgar would be a fantastic addition to any organization seeking a talented and dedicated Software Engineer.",
  },
];

export default function ReviewsSection() {
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
      className="position-relative min-vh-100 my-5 py-5 d-flex justify-content-center align-items-center"
    >
      <div className="w-100" ref={ref}>
        <div className="display-4 py-5 text-center mb-5">Reviews</div>
        <div className="" id="reviews">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </div>
    </Animated>
  );
}
