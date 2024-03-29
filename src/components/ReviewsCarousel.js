import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ReviewsCarousel.css'; // Add styles later

const ReviewsCarousel = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds (e.g., 3000ms or 3s)
    arrows: true,
    prevArrow: <div className="slick-prev">&#8592;</div>, // Left arrow
    nextArrow: <div className="slick-next">&#8594;</div>, // Right arrow
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div key={index} className="d-lg-flex d-xl-flex d-md-flex d-sm-block d-block">
          <div className="p-2 d-flex">
            <img
              src={process.env.PUBLIC_URL + "/images/" + review.img}
              alt="user profile"
              className="rounded-circle mx-auto w-sm-50"
              width={90}
              height={90}
            />
          </div>
          <div className="p-2">
            <h3>{review.author}</h3>
            <p className="fs-4">
              <i>{review.title}</i>
            </p>
            <p className="fs-4">
              <i>{review.relationship}</i>
            </p>
            <ReactStars
              count={5}
              size={35}
              color="#ffd700"
              activeColor="#ffd700"
              edit={false}
            />
            <p className="fs-4">{review.comment}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsCarousel;
