import { Box, Container, Stack } from "@mui/material";
import summerProduct1 from "../../images/tops1.webp";
import summerProduct2 from "../../images/tops2.webp";

const SummerSale = () => {
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Stack
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          gap={{ xs: 2, lg: 0 }}
        >
          <Box
            component="img"
            src={summerProduct1}
            sx={{
              width: { xs: "100%", lg: "48%" },
              objectFit: "cover",
              borderRadius: 5,
            }}
          ></Box>
          <Box
            component="img"
            src={summerProduct2}
            sx={{
              width: { xs: "100%", lg: "48%" },
              objectFit: "cover",
              borderRadius: 5,
            }}
          ></Box>
        </Stack>
      </Container>
    </>
  );
};

export default SummerSale;
