import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const images = [
  "../../images/brand1.png",
  "../../images/brand2.png",
  "../../images/brand3.png",
  "../../images/brand4.png",
  "../../images/brand5.png",
  "../../images/brand6.png",
  "../../images/brand7.jpg",
  "../../images/brand8.jpg",
  "../../images/brand9.png",
  "../../images/brand10.png",
  "../../images/brand11.jpg",
  "../../images/brand12.png",
  "../../images/brand13.png",
  "../../images/brand14.png",
  "../../images/brand15.jpg",
  "../../images/brand16.jpg",
  "../../images/brand17.png",
  "../../images/brand18.png",
  "../../images/brand19.jpg",
  "../../images/brand20.png",
  "../../images/brand21.jpg",
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
