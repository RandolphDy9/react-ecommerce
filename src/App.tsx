import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import ItemsCarousel from "./components/ItemsCarousel";
import Jumbotron from "./components/Jumbotron";
import Launch from "./components/Launch";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

import Shirt1 from "./assets/image/shirts/shirt1.webp";
import Shirt2 from "./assets/image/shirts/shirt2.webp";
import Shirt3 from "./assets/image/shirts/shirt3.webp";
import Shirt4 from "./assets/image/shirts/shirt4.webp";
import Shirt5 from "./assets/image/shirts/shirt5.webp";
import Shirt6 from "./assets/image/shirts/shirt6.webp";
import Shirt7 from "./assets/image/shirts/shirt7.webp";
import Shirt8 from "./assets/image/shirts/shirt8.webp";
import Shirt9 from "./assets/image/shirts/shirt9.webp";
import Shirt10 from "./assets/image/shirts/shirt10.webp";
import Shirt11 from "./assets/image/shirts/shirt11.webp";
import Shirt12 from "./assets/image/shirts/shirt12.webp";

function App() {
  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar />
      <Jumbotron />
      <ItemsCarousel heading="Best Sellers" clothes={[Shirt1, Shirt2, Shirt3, Shirt4, Shirt5, Shirt6]} />
      <Categories />
      <Trending />
      <Launch />
      <ItemsCarousel heading="You Might Like" clothes={[Shirt7, Shirt8, Shirt9, Shirt10, Shirt11, Shirt12]} />
      <Footer />
    </div>
  );
}

export default App;
