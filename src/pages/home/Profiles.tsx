import useProfiles from "../../hooks/useProfiles";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const Profiles = () => {
  const separate = ({ wholeName }: { wholeName: string }) => {
    const [name, family] = wholeName.split(" ");
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 12,
                md: 15,
                lg: 15,
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 12,
                md: 15,
                lg: 15,
              },
            }}
          >
            {family}
          </Typography>
        </Box>
      </>
    );
  };

  const { data, error, isLoading } = useProfiles();

  if (isLoading)
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100vw", height: "100vh" }}
      >
        <CircularProgress size={50} />
      </Stack>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Swiper
          slidesPerView={
            isDesktop ? 10.2 : isTablet ? 8.5 : isMobile ? 4.2 : "auto"
          }
          spaceBetween={isDesktop ? 30 : isTablet ? 25 : isMobile ? 20 : 1}
        >
          {data.map((profile) => (
            <SwiperSlide key={profile.id}>
              <Stack
                gap={1}
                alignItems="flex-start"
                justifyContent="center"
                sx={{ cursor: "pointer", textAlign: "center" }}
              >
                <Box
                  component="img"
                  src={profile.avatar}
                  sx={{
                    width: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    objectFit: "cover",
                    border: "3px solid purple",
                    padding: "2px",
                  }}
                ></Box>
                {separate({ wholeName: profile.name })}
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Profiles;
