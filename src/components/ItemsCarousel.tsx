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
    <div className="mx-48 my-20">
      <div className="text-5xl font-semibold">{ heading }</div>
      <Slider {...settings}>
        { clothes.map((item: string, i: number) => {
            return <img className="my-4 shadow-2xl px-4" key={`item${i}`} src={item} alt="clothe" />
          })
        }
      </Slider>
    </div>
  )
}

export default ItemsCarousel;