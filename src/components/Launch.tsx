import Shirt7 from "../assets/image/shirts/shirt7.webp";
import Shirt8 from "../assets/image/shirts/shirt8.webp";
import Shirt9 from "../assets/image/shirts/shirt9.webp";
import Shirt10 from "../assets/image/shirts/shirt10.webp";
import Rocket from "../assets/image/rocket.png";

const Item = ({ image }: { image: string }) => {
  return (
    <div className="flex justify-between p-4 bg-white rounded-2xl">
      <div className="flex gap-4">
        <div className="w-32 relative aspect-ratio-1/1">
          <img src={image} alt="item-img" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-lg font-semibold">Drape KL4</div>
          <div className="flex gap-2 my-1">
            <div className="text-sm bg-yellow-50 py-1 px-3 border">Free Shipping</div>
            <div className="text-sm py-1 px-3 border">New</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Launch = () => {
  return (
    <div className="py-16 px-6 md:px-32 bg-[#333333]">
      <div className="flex justify-between items-center bg-yellow-50 p-6 rounded-2xl">
        <div>
          <div className="font-bold text-lg">Product Launch</div>
          <div>These are some of our upcoming products to be launch in a month.</div>
        </div>
        <div className="flex gap-4 mx-2">
          <div className="w-12">
            <img src={Rocket} alt="rocket-img" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 my-4">
        <Item image={Shirt7} />
        <Item image={Shirt8} />
        <Item image={Shirt9} />
        <Item image={Shirt10} />
      </div>
    </div>
  )
}

export default Launch;