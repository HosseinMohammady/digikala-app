import { Box, Stack, Container } from "@mui/material";
import image1 from "../../images/imgT1.webp";
import image2 from "../../images/imgT2.webp";
import image3 from "../../images/imgT3.webp";
import image4 from "../../images/imgT4.webp";

const ImagesSlides = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Stack
        sx={{ p: 0 }}
        flexWrap="wrap"
        gap={{ sm: "27px", xs: "12px", lg: 0 }}
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <Box
          sx={{
            width: { xs: "48%", lg: "24%" },
            borderRadius: 5,
          }}
          component="img"
          src={image1}
        ></Box>
        <Box
          sx={{
            width: { xs: "48%", lg: "24%" },
            borderRadius: 5,
          }}
          component="img"
          src={image2}
        ></Box>
        <Box
          sx={{
            width: { xs: "48%", lg: "24%" },
            borderRadius: 5,
          }}
          component="img"
          src={image3}
        ></Box>
        <Box
          sx={{
            width: { xs: "48%", lg: "24%" },
            borderRadius: 5,
          }}
          component="img"
          src={image4}
        ></Box>
      </Stack>
    </Container>
  );
};

export default ImagesSlides;
