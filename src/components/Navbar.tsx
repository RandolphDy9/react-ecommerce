
const Navbar = () => {
  return (
    <div>
      <div className="w-full py-2 bg-yellow-100 text-center text-xs font-bold">
        Price Change: Drape reacts to increased costs with a slight price increase
      </div>
      <div className="flex justify-between mx-12 my-4 items-center">
        <div>search</div>
        <div className="text-3xl">DRAPE!</div>
        <div className="flex gap-4">
          <div>Favorite</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;