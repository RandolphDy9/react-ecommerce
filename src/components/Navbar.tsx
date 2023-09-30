import { useNavigate } from "react-router-dom";
import Cart from "../assets/icons/cart.svg";

const Navbar = ({ onClick, items }: { onClick: () => void, items: number }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#333333]">
      <div className="w-full py-2 bg-yellow-100 text-center text-xs font-bold">
        Price Change: Drape reacts to increased costs with a slight price increase
      </div>
      <div className="flex justify-between mx-12 py-6 items-center text-white">
        <div></div>
        <div className="text-5xl font-semibold cursor-pointer" onClick={() => navigate('/')}>DRAPE!</div>
        <div className="flex gap-6 relative">
          <div className="f">
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
  )
}

export default Navbar;