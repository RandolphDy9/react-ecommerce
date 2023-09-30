import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Items } from "../data/Data";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemsCarousel from "../components/ItemsCarousel";

type CartItem = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  imgSrc: string;
  quantity: number;
};

const Details = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState<CartItem>();
  const { id } = useParams();
  const { increaseCartQuantity, cartItems } = useShoppingCart();

  useEffect(() => {
    if (id) {
      const selectedItem = Items.find((item) => item.id === parseInt(id));
      setItem(selectedItem);
    }
  }, [cartItems, id]);

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar onClick={() => navigate("/cart")} items={cartItems.length} />

      <div className="m-6 md:m-20 flex md:gap-12 flex-col md:flex-row justify-center md:w-1/2 md:mx-auto">
        <div className="md:w-1/3">
          <img src={item?.imgSrc} alt="clothe" />
        </div>
        <div className="md:w-2/3">
          <div>
            <div className="text-3xl font-bold">{item?.name}</div>
          </div>
          <div className="text-3xl text-red-600 font-semibold">Php {item?.price}</div>
          <div className="flex gap-2 text-2xl text-gray-500">
            <div className="line-through">Php {item?.oldPrice}</div>
            <div>-</div>
            {item?.price && (
              <div>{((item.oldPrice - item.price) / item.oldPrice) * 100}%</div>
            )}
          </div>
          <div className="my-4">
            Introducing our premium cotton masterpiece: the Pure Cotton Classic
            Tee. Crafted with the utmost attention to quality, this T-shirt is a
            testament to comfort and style. Made from 100% pure cotton, it
            offers unrivaled softness against your skin, ensuring all-day
            comfort. With its timeless design and breathable fabric, the Pure
            Cotton Classic Tee is the perfect choice for those who appreciate
            both luxury and simplicity in their wardrobe essentials. Elevate
            your everyday style with this exceptional piece that effortlessly
            combines comfort and elegance.
          </div>
          { item &&
            <div className="border-2 border-gray-700 px-4 py-3 text-center cursor-pointer hover:bg-red-50 font-semibold rounded-2xl text-2xl" onClick={() => increaseCartQuantity(item)}>Add to Cart</div>
          }
        </div>
      </div>

      <div className="md:mx-52">
        <ItemsCarousel heading="Other items you might like" clothes={Items.slice(3, 11)} />
      </div>

      <Footer />
    </div>
  );
};

export default Details;
