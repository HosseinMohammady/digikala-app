import { isDesktop, isMobile } from "react-device-detect";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <>
      {isMobile ? (
        <FooterMobile />
      ) : isDesktop ? (
        <FooterDesktop />
      ) : (
        <FooterMobile />
      )}
    </>
  );
};

export default Footer;
