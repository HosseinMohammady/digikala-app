import Advertisements from "./Advertisements";
import Articles from "./Articles";
import DigiClub from "./DigiClub";
import Discounts from "./Discounts";
import ImagesSlides from "./ImageSlides";
import Options from "./Options";
import Products from "./Products";
import Profiles from "./Profiles";
import SummerSale from "./SummerSale";
import TopBrands from "./TopBrands";

const HomePage = () => {
  return (
    <>
      <Profiles />
      <Advertisements />
      <Options />
      <Products />
      <ImagesSlides />
      <SummerSale />
      <TopBrands />
      <DigiClub />
      <Discounts />
      <Articles />
    </>
  );
};

export default HomePage;
