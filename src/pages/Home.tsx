import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import Jumbotron from "../components/Jumbotron";
import Launch from "../components/Launch";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

import Shirt1 from "../assets/image/shirts/shirt1.webp";
import Shirt2 from "../assets/image/shirts/shirt2.webp";
import Shirt3 from "../assets/image/shirts/shirt3.webp";
import Shirt4 from "../assets/image/shirts/shirt4.webp";
import Shirt5 from "../assets/image/shirts/shirt5.webp";
import Shirt6 from "../assets/image/shirts/shirt6.webp";
import Shirt7 from "../assets/image/shirts/shirt7.webp";
import Shirt8 from "../assets/image/shirts/shirt8.webp";
import Shirt9 from "../assets/image/shirts/shirt9.webp";
import Shirt10 from "../assets/image/shirts/shirt10.webp";
import Shirt11 from "../assets/image/shirts/shirt11.webp";
import Shirt12 from "../assets/image/shirts/shirt12.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Navbar onClick={() => navigate('/cart')} />
      <Jumbotron />
      <ItemsCarousel
        heading="Best Sellers"
        clothes={[
          {
            name: "Drape Tee v1",
            price: 450,
            oldPrice: 500,
            imgSrc: Shirt1,
          },
          {
            name: "Drape Xander v1",
            price: 450,
            oldPrice: 500,
            imgSrc: Shirt2,
          },
          {
            name: "Drape Vino v1",
            price: 400,
            oldPrice: 500,
            imgSrc: Shirt3,
          },
          {
            name: "Drape Dough v1",
            price: 350,
            oldPrice: 500,
            imgSrc: Shirt4,
          },
          {
            name: "Drape 23 v1",
            price: 450,
            oldPrice: 500,
            imgSrc: Shirt5,
          },
          {
            name: "Drape 5 v1",
            price: 350,
            oldPrice: 500,
            imgSrc: Shirt6,
          },
        ]}
      />
      <Categories />
      <Trending />
      <Launch />
      <ItemsCarousel
        heading="You Might Like"
        clothes={[
          {
            name: "Drape Easy v1",
            price: 400,
            oldPrice: 500,
            imgSrc: Shirt7,
          },
          {
            name: "Drape Blizz v1",
            price: 400,
            oldPrice: 500,
            imgSrc: Shirt8,
          },
          {
            name: "Drape Pheno v1",
            price: 450,
            oldPrice: 500,
            imgSrc: Shirt9,
          },
          {
            name: "Drape 10 v1",
            price: 350,
            oldPrice: 500,
            imgSrc: Shirt10,
          },
          {
            name: "Drape 11 v1",
            price: 350,
            oldPrice: 500,
            imgSrc: Shirt11,
          },
          {
            name: "Drape 12 v1",
            price: 350,
            oldPrice: 500,
            imgSrc: Shirt12,
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Home;
