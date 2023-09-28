import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

type ShirtType = {
  name: string;
  price: number;
  oldPrice: number;
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
  const navigate = useNavigate();

  return (
    <div className="mx-6 my-10 md:mx-48 md:my-20">
      <div className="text-5xl font-semibold">{ heading }</div>
      <Slider {...settings}>
        { clothes.map((item: ShirtType, i: number) => {
          return (
            <div key={`item${i}`} className="flex flex-col my-4 px-4 border overflow-x-hidden cursor-pointer hover:scale-105" onClick={() => navigate(`/${i}`)}>
              <img src={item.imgSrc} alt="clothe" />
              <div className="flex justify-between flex-col font-semibold my-4">
                <div>
                  <div className="text-2xl">{item.name}</div>
                </div>
                <div className="text-xl text-red-600">
                  Php { item.price }
                </div>
                <div className="flex gap-2 text-xl text-gray-500">
                  <div className="line-through">
                    Php { item.oldPrice }
                  </div>
                  <div>-</div>
                  <div>
                    { ((item.oldPrice - item.price) / item.oldPrice) * 100 }%
                  </div>
                </div>
                <div className="p-2 my-2 border-2 border-gray-800 hover:bg-gray-300 text-center text-lg rounded-2xl">
                  Add to Cart
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