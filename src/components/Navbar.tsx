
const Navbar = () => {
  return (
    <div className="bg-[#333333]">
      <div className="w-full py-2 bg-yellow-100 text-center text-xs font-bold">
        Price Change: Drape reacts to increased costs with a slight price increase
      </div>
      <div className="flex justify-between mx-12 py-6 items-center text-white">
        <div></div>
        <div className="text-5xl font-semibold">DRAPE!</div>
        <div className="flex gap-4">
          <div>Favorite</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;