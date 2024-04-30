import Advertisements from "./Advertisements";
import ImagesSlides from "./ImageSlides";
import Options from "./Options";
import Products from "./Products";
import Profiles from "./Profiles";

const HomePage = () => {
  return (
    <>
      <Profiles />
      <Advertisements />
      <Options />
      <Products />
      <ImagesSlides />
    </>
  );
};

export default HomePage;
