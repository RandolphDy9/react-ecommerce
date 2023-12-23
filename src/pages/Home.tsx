import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import Jumbotron from "../components/Jumbotron";
import Launch from "../components/Launch";
import Trending from "../components/Trending";
import { Items } from "../data/Data";

const Home = () => {
  return (
    <div className="bg-[#F0F0F0] dosis-font">
      <Jumbotron />
      <ItemsCarousel
        heading="Best Sellers"
        clothes={Items.slice(0, 6)}
      />
      <Categories />
      <Trending />
      <Launch />
      <ItemsCarousel
        heading="You Might Like"
        clothes={Items.slice(6, 12)}
      />
      <Footer />
    </div>
  );
};

export default Home;
