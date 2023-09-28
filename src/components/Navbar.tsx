import { useNavigate } from "react-router-dom";
import Cart from "../assets/icons/cart.svg";

const Navbar = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#333333]">
      <div className="w-full py-2 bg-yellow-100 text-center text-xs font-bold">
        Price Change: Drape reacts to increased costs with a slight price increase
      </div>
      <div className="flex justify-between mx-12 py-6 items-center text-white">
        <div></div>
        <div className="text-5xl font-semibold cursor-pointer" onClick={() => navigate('/')}>DRAPE!</div>
        <div className="flex gap-6">
          <div>
            <img src={Cart} alt="favorite-icon" width="24" className="cursor-pointer" onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;