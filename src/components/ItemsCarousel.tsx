import Slider from "react-slick";

const ItemsCarousel = ({ heading, clothes } : { heading: string, clothes: string[] }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-56 my-12">
      <div className="text-5xl">{ heading }</div>
      <Slider {...settings}>
        { clothes.map((item: string, i: number) => {
            return <img className="my-4" key={`item${i}`} src={item} alt="clothe" />
          })
        }
      </Slider>
    </div>
  )
}

export default ItemsCarousel;