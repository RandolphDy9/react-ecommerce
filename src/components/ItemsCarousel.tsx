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
          return (
            <div key={`item${i}`} className="flex flex-col my-4 px-4 border">
              <img src={item} alt="clothe" />
              <div className="flex justify-between font-semibold my-4">
                <div>
                  <div className="text-xl">Drape T1</div>
                  <div>Description?</div>
                </div>
                <div className="text-xl">
                  P450.00
                </div>
              </div>
            </div>
          )
          })
        }
      </Slider>
    </div>
  )
}

export default ItemsCarousel;