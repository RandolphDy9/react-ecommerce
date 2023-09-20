
const Item = () => {
  return (
    <div className="p-4 flex justify-between bg-white my-2 rounded-xl items-center">
      <div className="flex justify-between gap-2">
        <div>image</div>
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
    <div className="bg-gray-100 p-4 w-full rounded-xl">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

const Card = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
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
    <div className="mx-56">
      <div className="text-5xl">Trending</div>
      <div className="my-4 flex justify-between gap-4">
        <ListItems />
        <Cards />
      </div>
    </div>
  )
}

export default Trending;