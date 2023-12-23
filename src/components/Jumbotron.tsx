import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Shirt from "../assets/image/hero.png";

const Jumbotron = () => {
  const navigate = useNavigate();
  const { cartItems } = useShoppingCart();

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/3 bg-[#333333] flex justify-center items-center"></div>
      <div className="flex flex-col justify-between gap-4 items-start">
        <div className="absolute inset-0">
          <Navbar logoIsWhite={false} onClick={() => navigate('/cart')} items={cartItems.length} />
          <div className="flex justify-center items-center gap-12 h-screen -mt-20">
            <img className="rotate-3" src={Shirt} alt="hero" />
            <div className="w-1/3 flex flex-col gap-2">
              <div className="text-7xl font-semibold">
                Elevate Your Style with Exclusive <b className="text-red-500">Drape</b> Shirt Collections
              </div>
              <div className="text-xl">
                Step into a World of Exceptional Shirts Tailored to Perfection:
                Explore Our Diverse Range of Stylish, Comfortable, and Uniquely
                Crafted Shirts for Every Occasion
              </div>
              <div>
                <div className="px-5 py-2 text-2xl border rounded-lg border-[#333333] font-semibold w-min cursor-pointer hover:bg-red-300" onClick={() => navigate('/clothes')}>
                  Explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;