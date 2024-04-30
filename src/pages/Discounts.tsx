import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import discount1 from "../images/dis1.webp";
import discount2 from "../images/dis2.webp";
import discount3 from "../images/dis3.webp";
import discount4 from "../images/dis4.webp";
import discount5 from "../images/dis5.webp";
import discount6 from "../images/dis6.webp";
import discount7 from "../images/dis7.webp";
import discount8 from "../images/dis8.webp";
import discount9 from "../images/dis9.webp";
import discount10 from "../images/dis10.webp";
import discount11 from "../images/dis11.webp";
import discount12 from "../images/dis12.webp";
import discount13 from "../images/dis13.webp";
import discount14 from "../images/dis14.webp";
import discount15 from "../images/dis15.webp";
import discount16 from "../images/dis16.webp";
import discount17 from "../images/dis17.webp";
import discount18 from "../images/dis18.webp";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const discounts = [
  {
    image: discount1,
    price: "99,100",
  },
  {
    image: discount2,
    price: "58,900",
  },
  {
    image: discount3,
    price: "6,899,000",
  },
  {
    image: discount4,
    price: "4,199,500",
  },
  {
    image: discount5,
    price: "5,929,100",
  },
  {
    image: discount6,
    price: "428,000",
  },
  {
    image: discount7,
    price: "1,029,100",
  },
  {
    image: discount8,
    price: "1,929,100",
  },
  {
    image: discount9,
    price: "450,100",
  },
  {
    image: discount10,
    price: "468,000",
  },
  {
    image: discount11,
    price: "105,000",
  },
  {
    image: discount12,
    price: "58,000",
  },
  {
    image: discount13,
    price: "999,000",
  },
  {
    image: discount14,
    price: "710,000",
  },
  {
    image: discount15,
    price: "980,000",
  },
  {
    image: discount16,
    price: "845,000",
  },
  {
    image: discount17,
    price: "920,000",
  },
  {
    image: discount18,
    price: "959,000",
  },
];

const Discounts = () => {
  return (
    <>
      <Container
        sx={{
          mt: 4,
          border: { lg: "1px solid lightgray" },
          borderRadius: { lg: 5 },
        }}
      >
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} lg={12} textAlign="center">
            <Typography
              mb={2}
              fontSize={{ xs: 20, sm: 30, lg: 25 }}
              component="h1"
            >
              منتخب محصولات تخفیف و حراج
              <DiscountOutlinedIcon
                sx={{
                  color: "error.main",
                  fontSize: { xs: 18, sm: 25, lg: 20 },
                  ml: 1,
                }}
              />
            </Typography>
          </Grid>
          {discounts.map((discount, index) => (
            <Grid
              key={index}
              item
              xs={6}
              md={6}
              lg={2}
              sx={{ cursor: "pointer" }}
            >
              <Stack alignItems="center">
                <Box
                  component="img"
                  src={discount.image}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></Box>
                <Stack flexDirection="row-reverse" gap={1} mt={1}>
                  <Typography
                    component="p"
                    fontSize={{ xs: 12, sm: 25, lg: 16 }}
                  >
                    {discount.price}
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: 12, sm: 25, lg: 16 }}
                  >
                    {" "}
                    تومان{" "}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Discounts;
