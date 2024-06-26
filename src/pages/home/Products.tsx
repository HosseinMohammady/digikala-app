import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useProducts from "../../hooks/useProducts";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, error, isLoading } = useProducts();

  if (error) return <p>{error.message}</p>;

  return (
    <Container
      sx={{
        bgcolor: "error.main",
        py: 2,
        borderRadius: { xs: 0, lg: 3 },
        mt: 3,
      }}
    >
      {isLoading ? (
        <Skeleton sx={{ height: "215px" }} animation="wave" />
      ) : (
        <Swiper
          dir="rtl"
          slidesPerView={isTablet ? 5 : isMobile ? 2.5 : isDesktop ? 7 : 5}
          spaceBetween={3}
        >
          {data.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none", color: "#222" }}
              >
                <Stack
                  sx={{ px: 2, py: 4, alignItems: "center", cursor: "pointer" }}
                  style={{ backgroundColor: "#fff" }}
                >
                  <Box
                    component="img"
                    sx={{ width: 100, height: 100, mx: "auto" }}
                    src={product.image}
                  ></Box>
                  <Typography sx={{ mt: 3 }} component="h2">
                    {product.price} $
                  </Typography>
                </Stack>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default Products;
