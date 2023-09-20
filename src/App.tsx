import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import ItemsCarousel from "./components/ItemsCarousel";
import Jumbotron from "./components/Jumbotron";
import Launch from "./components/Launch";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ItemsCarousel heading="Best Sellers" />
      <Categories />
      <Trending />
      <Launch />
      <Footer />
    </div>
  );
}

export default App;
