import Cover1 from "../assets/image/cover/portrait.jpg";
import Cover2 from "../assets/image/cover/male.jpg";
import Cover3 from "../assets/image/cover/female.jpg";
import Cover4 from "../assets/image/cover/quote.jpg";

const Item = ({ className, image }: { className: string, image: string }) => {
  return (
    <div className={`${className} bg-gray-100 rounded-2xl p-4 relative aspect-ratio-1/1`}>
      <img className="absolute inset-0 h-full w-full object-cover" src={image} alt="cover" />
    </div>
  )
}

const Categories = () => {
  return (
    <div className="grid grid-cols-4 md:grid-rows-2 gap-6 my-4 bg-[#333333] py-20">
      <Item className="md:col-span-2 md:row-span-2 h-96" image={Cover1} />
      <Item className="md:col-span-1 md:row-span-1" image={Cover2} />
      <Item className="md:col-span-1 md:row-span-1" image={Cover3} />
      <Item className="md:col-span-2 md:row-span-1" image={Cover4} />
    </div>
  )
}

export default Categories;