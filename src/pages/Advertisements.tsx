import { Box } from "@mui/material";
import advertisement1 from "../images/adver1.webp";
import advertisement2 from "../images/adver2.webp";
import advertisement3 from "../images/adver3.webp";
import advertisement4 from "../images/adver4.gif";
import advertisement5 from "../images/adver5.webp";
import advertisement6 from "../images/adver6.webp";
import advertisement7 from "../images/adver7.webp";
import advertisement8 from "../images/adver8.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const advertisements = [
  advertisement1,
  advertisement2,
  advertisement3,
  advertisement4,
  advertisement5,
  advertisement6,
  advertisement7,
  advertisement8,
];

const Advertisements = () => {
  return (
    <Box mt={5}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {advertisements.map((advertisement, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              width="100%"
              src={advertisement}
              sx={{
                objectFit: "cover",
                cursor: "pointer",
                height: { xs: 200, sm: 280, lg: 350 },
              }}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Advertisements;
