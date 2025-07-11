import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";

const Item = ({ item }: { item: string }) => {
  return <div className="text-sm my-2 hover:text-gray-400 cursor-pointer">{ item }</div>
}

const Footer = () => {
  return (
    <div className="mt-12 bg-[#333333] text-white rounded-t-2xl p-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 text-4xl font-bold md:mx-8">
          <div>STAY UP TO DATE WITH NEWS, EVENTS AND MORE!</div>
        </div>
        <div className="w-2/3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-col md:mx-8">
              <b>CUSTOMER SERVICE</b>
              <Item item="Help Center" />
              <Item item="Form Status" />
              <Item item="Complaints" />
              <Item item="Payment Methods" />
              <Item item="Contact" />
              <Item item="Shipping Status" />
              <Item item="Shipping Information" />
            </div>
            <div className="flex-col md:mx-8">
              <b>BUSINESS</b>
              <Item item="RoKo for business" />
              <Item item="Sponsoring & Collaborations" />
              <Item item="RoKo Source" />
            </div>
            <div className="flex-col md:mx-8">
              <b>LEGAL</b>
              <Item item="Imprint" />
              <Item item="Cancellation" />
              <Item item="Privacy Policy" />
              <Item item="Cookie Settings" />
              <Item item="Terms & Conditions" />
            </div>
            <div className="flex-col md:mx-8">
              <b>WEAR</b>
              <Item item="Our Team" />
              <Item item="Sustainability at Drape" />
              <Item item="About Us" />
              <Item item="Press" />
              <Item item="Jobs" />
              <Item item="Newsletter" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-2 md:flex-row items-center my-8 md:my-20 md:mx-8">
        <div>
          Drape is inspired by Dribbble.
        </div>
        <div className="flex gap-4">
          <div>
            <img src={Facebook} alt="icon-social" width="24" />
          </div>
          <div>
            <img src={Instagram} alt="icon-social" width="24" />
          </div>
        </div>
      </div>
      <div className="text-center">
        Drape 2023 &copy; All rights reserved.
      </div>
    </div>
  )
}

export default Footer;