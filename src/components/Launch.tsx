
const Item = () => {
  return (
    <div className="flex justify-between p-4 bg-white rounded-xl">
      <div className="flex gap-4">
        <div>image</div>
        <div>
          <div>name</div>
          <div className="flex gap-2">
            <div className="bg-yellow-50 p-2">Free Shipping</div>
            <div className="p-2 border">New</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Launch = () => {
  return (
    <div className="mx-56 py-16 px-32 bg-gray-100 rounded-xl">
      <div className="flex justify-between bg-yellow-50 p-4 rounded-xl">
        <div>
          <div>Product Launch</div>
          <div>These are some of our upcoming products to be launch in a month.</div>
        </div>
        <div className="flex gap-4">
          <div>img</div>
          <div>img</div>
          <div>img</div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 my-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Launch;