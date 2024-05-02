import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand1.png";
import brand3 from "../../images/brand1.png";
import brand4 from "../../images/brand1.png";
import brand5 from "../../images/brand1.png";
import brand6 from "../../images/brand1.png";
import brand7 from "../../images/brand1.png";
import brand8 from "../../images/brand1.png";
import brand9 from "../../images/brand1.png";
import brand10 from "../../images/brand1.png";
import brand11 from "../../images/brand1.png";
import brand12 from "../../images/brand1.png";
import brand13 from "../../images/brand1.png";
import brand14 from "../../images/brand1.png";
import brand15 from "../../images/brand1.png";
import brand16 from "../../images/brand1.png";
import brand17 from "../../images/brand1.png";
import brand18 from "../../images/brand1.png";
import brand19 from "../../images/brand1.png";
import brand20 from "../../images/brand1.png";
import brand21 from "../../images/brand1.png";

const images = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
  brand19,
  brand20,
  brand21,
];

const TopBrands = () => {
  return (
    <Container
      sx={{
        border: { lg: "1px solid lightgray" },
        borderRadius: 5,
        mt: 3,
        py: 3,
      }}
    >
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        mb={3}
      >
        <Typography variant="h5">محبوب‌ ترین برندها</Typography>
        <StarBorderOutlinedIcon sx={{ fontSize: 24, color: "warning.main" }} />
      </Stack>
      <Swiper
        slidesPerView={isDesktop ? 10 : isTablet ? 8 : isMobile ? 3.5 : 5}
        dir="rtl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image}
              sx={{
                cursor: "pointer",
                width: { xs: "60px", sm: "75px", lg: "100px" },
                height: "100px",
                objectFit: "contain",
              }}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TopBrands;
