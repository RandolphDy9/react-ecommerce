import Shirt1 from "../assets/image/shirts/shirt1.webp";
import Shirt2 from "../assets/image/shirts/shirt2.webp";
import Shirt4 from "../assets/image/shirts/shirt4.webp";
import Shirt5 from "../assets/image/shirts/shirt5.webp";

const Item = ({ image }: { image: string }) => {
  return (
    <div className="p-4 flex justify-between bg-white my-2 rounded-2xl items-center">
      <div className="flex justify-between gap-2">
        <div className="w-9">
          <img src={image} alt="item-img" />
        </div>
        <div>
          <div>Name</div>
          <div>sales</div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>graph</div>
        <div>price</div>
      </div>
    </div>
  )
}

const ListItems = () => {
  return (
    <div className="bg-gray-100 p-4 w-full rounded-2xl">
      <Item image={Shirt1} />
      <Item image={Shirt2} />
      <Item image={Shirt4} />
      <Item image={Shirt5} />
    </div>
  )
}

const Card = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl">
      card item
    </div>
  )
}

const Cards = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

const Trending = () => {
  return (
    <div className="mx-48 my-20">
      <div className="text-5xl font-semibold">Trending</div>
      <div className="my-4 flex justify-between gap-4">
        <ListItems />
        <Cards />
      </div>
    </div>
  )
}

export default Trending;