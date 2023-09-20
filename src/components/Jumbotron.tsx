import Slider from "react-slick";
import Hero1 from "../assets/image/hero1.jpg";
import Hero2 from "../assets/image/hero2.jpg";
import Hero3 from "../assets/image/hero3.jpg";
import Hero4 from "../assets/image/hero4.jpg";

const Jumbotron = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mx-12 my-4">
      <Slider {...settings}>
          <img className="md:h-[40rem] object-cover rounded-xl" src={Hero1} alt="hero1" />
          <img className="md:h-[40rem] object-cover rounded-xl" src={Hero2} alt="hero2" />
          <img className="md:h-[40rem] object-cover rounded-xl" src={Hero3} alt="hero3" />
          <img className="md:h-[40rem] object-cover rounded-xl" src={Hero4} alt="hero4" />
      </Slider>
    </div>
  );
};

export default Jumbotron;
