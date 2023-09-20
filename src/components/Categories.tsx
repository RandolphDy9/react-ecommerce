
const Item = ({ className }: { className: string }) => {
  return (
    <div className={`${className} bg-gray-100 rounded-xl p-4`}>
      ITEM
    </div>
  )
}

const Categories = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-12 my-4">
      <Item className="col-span-2 row-span-2" />
      <Item className="col-span-1 row-span-1" />
      <Item className="col-span-1 row-span-1" />
      <Item className="col-span-2 row-span-1" />
    </div>
  )
}

export default Categories;