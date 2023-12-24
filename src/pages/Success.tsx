import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Success = () => {
  const { cartItems } = useShoppingCart();
  const dateNow = new Date();

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar
        logoIsWhite={true}
        onClick={() => console.log("cart")}
        items={cartItems.length}
      />

      <div className="bg-white p-12 max-w-4xl flex flex-col justify-center items-center mx-auto gap-8 text-center">
        <div className="text-3xl text-green-600 font-semibold">
          Order Confirmed!
        </div>
        <div className="md:mx-20">
          Congratulations and a big thank you for choosing <b>Drape</b> for your
          fashion needs!
          <br /> We're thrilled to confirm that we've received your payment and
          your order is now in process.
        </div>
        <div>Here are the juicy details of your fabulous purchase:</div>
        <div>
          <b>Order Number: </b>GP12ASDXX1
          <br />
          <b>Date of Purchase: </b>{dateNow.toString()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
