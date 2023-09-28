import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar onClick={() => console.log('cart')} />

      <Footer />
    </div>
  )
}

export default Cart;