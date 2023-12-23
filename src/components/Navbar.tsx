import { useNavigate } from "react-router-dom";
import Cart from "../assets/icons/shopping-cart.png";

const Navbar = ({ logoIsWhite, onClick, items }: { logoIsWhite: boolean, onClick: () => void, items: number }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-between mx-12 py-6 items-center text-[#333333]">
        <div className={`text-2xl font-semibold cursor-pointer ${ !logoIsWhite ? "text-white" : "text-[#333333]" }`} onClick={() => navigate('/')}>DRAPE</div>
        <div className="flex gap-6">
          <div className="text-lg font-semibold hover:text-red-600 cursor-pointer" onClick={() => navigate('/clothes')}>
            All Clothes
          </div>
          <div className="flex gap-6 relative">
            <div className="">
              <img src={Cart} alt="cart-icon" width="24" className="cursor-pointer" onClick={onClick} />
            </div>
            <div className="border absolute -top-3 left-5 z-10 bg-red-500 rounded-full w-6 h-6 text-sm flex justify-center items-center font-bold">
              <div>
                { items }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;