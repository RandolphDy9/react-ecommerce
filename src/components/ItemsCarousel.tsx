import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import StarIcon from "@/assets/icons/star.svg";

type ShirtType = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  imgSrc: string;
  rating: number;
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
    <div className="px-6 py-10 md:px-48 md:py-20">
      <div className="text-3xl md:text-5xl font-semibold">{ heading }</div>
      <Slider {...settings}>
        { clothes.map((item: ShirtType, i: number) => {
          return (
            <div key={`item${i}`} className="flex flex-col my-2 py-4 px-4 border overflow-x-hidden cursor-pointer hover:bg-gray-100 hover:shadow relative" onClick={() => navigate(`/${item.id}`)}>
              <div className="bg-red-600 text-white px-2 py-1 rounded-xl absolute top-4 left-8">{ ((item.oldPrice - item.price) / item.oldPrice) * 100 }%</div>
              <img src={item.imgSrc} alt="clothe" />
              <div className="flex justify-between flex-col font-semibold my-4">
                <div>
                  <div className="text-xl">{item.name}</div>
                </div>
                <div className="flex items-center space-x-1 my-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <img src={StarIcon} key={i} className="w-4 h-4" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="text-2xl">
                    Php { item.price }
                  </div>
                  <div className="flex gap-2 text-lg text-gray-500">
                    <div className="line-through">
                      Php { item.oldPrice }
                    </div>
                  </div>
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