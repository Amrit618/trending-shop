import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Trending />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter/>
    </div>
  );
};

export default Home;
