
const Item = ({ item }: { item: string }) => {
  return <div className="text-sm my-2">{ item }</div>
}

// const Icon = ({ item }: { item: string }) => {
//   return <div className="text-sm my-2">{ item }</div>
// }

const Footer = () => {
  return (
    <div className="m-12 bg-gray-100 rounded-xl p-12">
      <div className="flex">
        <div className="w-1/3 text-4xl font-bold mx-8">
          <div>STAY UP TO DATE WITH NEWS, EVENTS AND MORE!</div>
        </div>
        <div className="w-2/3">
          <div className="flex">
            <div className="flex-col mx-8">
              <b>CUSTOMER SERVICE</b>
              <Item item="Help Center" />
              <Item item="Form Status" />
              <Item item="Complaints" />
              <Item item="Payment Methods" />
              <Item item="Contact" />
              <Item item="Shipping Status" />
              <Item item="Shipping Information" />
            </div>
            <div className="flex-col mx-8">
              <b>BUSINESS</b>
              <Item item="RoKo for business" />
              <Item item="Sponsoring & Collaborations" />
              <Item item="RoKo Source" />
            </div>
            <div className="flex-col mx-8">
              <b>LEGAL</b>
              <Item item="Imprint" />
              <Item item="Cancellation" />
              <Item item="Privacy Policy" />
              <Item item="Cookie Settings" />
              <Item item="Terms & Conditions" />
            </div>
            <div className="flex-col mx-8">
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
      <div className="flex justify-between items-center my-20 mx-8">
        <div>
          Drape is inspired by Dribbble.
        </div>
        <div className="flex mx-2">
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
          <div>Icon 4</div>
          <div>Icon 5</div>
        </div>
      </div>
      <div className="text-center">
        Drape 2022 &copy; All rights reserved.
      </div>
    </div>
  )
}

export default Footer;