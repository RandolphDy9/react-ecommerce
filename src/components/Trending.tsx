import Shirt1 from "../assets/image/shirts/shirt1.webp";
import Shirt2 from "../assets/image/shirts/shirt2.webp";
import Shirt4 from "../assets/image/shirts/shirt4.webp";
import Shirt5 from "../assets/image/shirts/shirt5.webp";

const Item = ({ image }: { image: string }) => {
  return (
    <div className="p-4 flex justify-between bg-white my-2 rounded-2xl items-center">
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
        <div className="text-lg">P350.00</div>
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