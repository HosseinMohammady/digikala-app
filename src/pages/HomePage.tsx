import Advertisements from "./Advertisements";
import Articles from "./Articles";
import Discounts from "./Discounts";
import ImagesSlides from "./ImageSlides";
import Options from "./Options";
import Products from "./Products";
import Profiles from "./Profiles";
import SummerSale from "./SummerSale";

const HomePage = () => {
  return (
    <>
      <Profiles />
      <Advertisements />
      <Options />
      <Products />
      <ImagesSlides />
      <SummerSale />
      <Discounts />
      <Articles />
    </>
  );
};

export default HomePage;
