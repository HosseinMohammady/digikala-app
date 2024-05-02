import { isDesktop } from "react-device-detect";
import FooterDesktop from "../FooterDesktop";

const Footer = () => {
  return <>{isDesktop ? <FooterDesktop /> : ""}</>;
};

export default Footer;
