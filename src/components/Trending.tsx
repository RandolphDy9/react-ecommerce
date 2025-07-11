import Shirt1 from "@/assets/image/shirts/shirt1.webp";
import Shirt2 from "@/assets/image/shirts/shirt2.webp";
import Shirt4 from "@/assets/image/shirts/shirt4.webp";
import Shirt5 from "@/assets/image/shirts/shirt5.webp";

import Card1 from "@/assets/image/card/card1.jpg";
import Card2 from "@/assets/image/card/card2.jpg";
import Card3 from "@/assets/image/card/card3.jpg";
import Card4 from "@/assets/image/card/card4.jpg";

const Item = ({ image, price }: { image: string, price: number }) => {
  return (
    <div className="p-4 flex justify-between bg-white my-2 rounded-2xl items-center font-semibold hover:bg-gray-50">
      <div className="flex justify-between items-center gap-2">
        <div className="w-9">
          <img src={image} alt="item-img" />
        </div>
        <div>
          <div className="text-lg">Drape SG5</div>
          {/* <div>Description?</div> */}
        </div>
      </div>
      <div className="flex gap-4">
        {/* <div>graph</div> */}
        <div className="text-xl">Php { price }</div>
      </div>
    </div>
  )
}

const ListItems = () => {
  return (
    <div className="bg-gray-100 p-4 w-full rounded-2xl">
      <Item image={Shirt1} price={450} />
      <Item image={Shirt2} price={450} />
      <Item image={Shirt4} price={450} />
      <Item image={Shirt5} price={450} />
    </div>
  )
}

const Card = ({ image }: { image: string }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl relative h-48">
      <img src={image} alt="card-image" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
    </div>
  )
}

const Cards = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 md:w-full mx-6">
      <Card image={Card1} />
      <Card image={Card2} />
      <Card image={Card3} />
      <Card image={Card4} />
    </div>
  )
}

const Trending = () => {
  return (
    <div className="mx-6 my-10 md:mx-48 md:my-20">
      <div className="text-5xl font-semibold">Trending</div>
      <div className="my-4 flex justify-between flex-col md:flex-row gap-4">
        <ListItems />
        <Cards />
      </div>
    </div>
  )
}

export default Trending;