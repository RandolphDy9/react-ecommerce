import Slider from "react-slick";

type ShirtType = {
  name: string;
  price: number;
  imgSrc: string;
}

type ItemsType = {
  heading: string;
  clothes: ShirtType[];
}

const ItemsCarousel = ({ heading, clothes }: ItemsType) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="mx-6 my-10 md:mx-48 md:my-20">
      <div className="text-5xl font-semibold">{ heading }</div>
      <Slider {...settings}>
        { clothes.map((item: ShirtType, i: number) => {
          return (
            <div key={`item${i}`} className="flex flex-col my-4 px-4 border overflow-x-hidden cursor-pointer hover:scale-110">
              <img src={item.imgSrc} alt="clothe" />
              <div className="flex justify-between flex-col font-semibold my-4">
                <div>
                  <div className="text-xl">{item.name}</div>
                </div>
                <div className="text-xl">
                  Php { item.price }
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