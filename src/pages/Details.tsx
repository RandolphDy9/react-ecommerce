import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar onClick={() => navigate('/cart')} />
      <div className="my-10 flex justify-center">
        <div className="flex flex-col my-4 px-4 border overflow-x-hidden cursor-pointer">
          <img src="" alt="clothe" />
          <div className="flex justify-between flex-col font-semibold my-4">
            <div>
              <div className="text-2xl">Drape XXV</div>
            </div>
            <div className="text-xl text-red-600">
              Php 500
            </div>
            <div className="flex gap-2 text-xl text-gray-500">
              <div className="line-through">
                Php 550
              </div>
              <div>-</div>
              <div>
                {/* { ((item.oldPrice - item.price) / item.oldPrice) * 100 }% */}
              </div>
            </div>
            <div className="p-2 my-2 border-2 border-gray-800 hover:bg-gray-300 text-center text-lg rounded-2xl">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details;