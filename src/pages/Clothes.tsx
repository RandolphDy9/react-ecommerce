import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Items } from "../data/Data";

const Clothes = () => {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar
        logoIsWhite={true}
        onClick={() => console.log("cart")}
        items={cartItems.length}
      />

      <div className="bg-white max-w-7xl mx-auto p-12">
        <div className="text-3xl font-semibold">All Clothes</div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Items.map((item, i) => {
            return (
              <div
                key={`item${i}`}
                className="flex flex-col my-4 px-4 border overflow-x-hidden cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img src={item.imgSrc} alt="clothe" />
                <div className="flex justify-between flex-col font-semibold my-4">
                  <div>
                    <div className="text-2xl">{item.name}</div>
                  </div>
                  <div className="text-xl text-red-600">Php {item.price}</div>
                  <div className="flex gap-2 text-xl text-gray-500">
                    <div className="line-through">Php {item.oldPrice}</div>
                    <div>-</div>
                    <div>
                      {((item.oldPrice - item.price) / item.oldPrice) * 100}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Clothes;
