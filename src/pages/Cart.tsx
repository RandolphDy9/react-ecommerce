import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemsCarousel from "../components/ItemsCarousel";
import { Items } from "../data/Data";
import Trash from "../assets/icons/trash.svg";

type CartItem = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  imgSrc: string;
  quantity: number;
};

const Item = ({ id, name, image, price }: { id: number, name: string, image: string, price: number }) => {
  const { removeFromCart } = useShoppingCart();

  return (
    <div className="p-4 flex justify-between bg-white my-2 rounded-2xl items-center font-semibold">
      <div className="flex justify-between items-center gap-2">
        <div className="w-12">
          <img src={image} alt="item-img" />
        </div>
        <div>
          <div className="text-2xl">{ name }</div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-2xl text-red-600">Php { price }</div>
        <div>
          <img src={Trash} alt="cart-icon" width="24" className="cursor-pointer" onClick={() => removeFromCart(id) } />
        </div>
      </div>
    </div>
  )
}

const Cart = () => {
  const { cartItems } = useShoppingCart();
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (cartItems) {
      setItems(cartItems);
      setTotal(cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price
      }, 0))
    }
  }, [cartItems]);

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar onClick={() => console.log('cart')} items={cartItems.length} />

      <div className="m-6 md:w-1/2 md:mx-auto my-12">
        <div className="text-3xl md:text-5xl font-semibold my-4">Cart Items</div>
        {items.map(item => {
          return (
            <Item key={item.id} id={item.id} name={item.name} image={item.imgSrc} price={item.price} />
          )
        })}
        <div className="flex justify-end my-4 text-3xl md:text-4xl font-semibold">
          Total: <div className="text-red-600 ml-2">{ total } Php</div>
        </div>
      </div>
      <div className="md:mx-52">
        <ItemsCarousel heading="Other items you might like" clothes={Items.slice(3, 11)} />
      </div>
      <Footer />
    </div>
  )
}

export default Cart;