import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const images = [
  "../public/brand1.png",
  "../public/brand2.png",
  "../public/brand3.png",
  "../public/brand4.png",
  "../public/brand5.png",
  "../public/brand6.png",
  "../public/brand7.jpg",
  "../public/brand8.jpg",
  "../public/brand9.png",
  "../public/brand10.png",
  "../public/brand11.jpg",
  "../public/brand12.png",
  "../public/brand13.png",
  "../public/brand14.png",
  "../public/brand15.jpg",
  "../public/brand16.jpg",
  "../public/brand17.png",
  "../public/brand18.png",
  "../public/brand19.jpg",
  "../public/brand20.png",
  "../public/brand21.jpg",
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
