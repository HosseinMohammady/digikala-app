import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import deli from "../images/deli.svg";

const ProductDetailPage = () => {
  const { data, error, isLoading } = useProducts();
  if (error) return <p>{error.message}</p>;
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

  const { id } = useParams();
  const product = data?.find((product) => product.id === Number(id));

  return (
    <>
      <Stack
        flexDirection={{ xs: "column", lg: "row-reverse" }}
        justifyContent={{ lg: "space-around" }}
        mt={{ lg: 4, xs: 0 }}
        padding={{ xs: 1, lg: 0 }}
        mb={10}
      >
        <Stack
          mt={{ xs: 5, lg: 10 }}
          sx={{
            width: { xs: 320, lg: "25%" },
            height: { xs: 320, lg: 400 },
            mx: { xs: "auto", lg: 0 },
          }}
          component="img"
          src={product?.image}
        ></Stack>
        <Stack
          sx={{
            width: { xs: "100%", lg: "40%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              textAlign: "center",
              mt: { xs: 5, lg: 0 },
            }}
            component="h2"
          >
            {product?.title}
          </Typography>
          <Typography mt={{ xs: 4, lg: 8 }} component="p">
            {product?.description}
          </Typography>
          <Stack
            border={1}
            borderRadius={3}
            borderColor="text.disabled"
            mt={{ xs: 4, lg: "auto" }}
            p={1}
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="h2"
              sx={{ fontSize: "1.15rem", fontWeight: 600 }}
            >
              ارسال رایگان برای این کالا
            </Typography>
            <Stack component="img" src={deli}></Stack>
          </Stack>
        </Stack>
        <Stack
          flexDirection={{ xs: "row", lg: "column" }}
          justifyContent="center"
          alignItems="center"
          gap={1}
          mt={10}
          sx={{
            width: { xs: "80%", lg: "20%" },
            mx: { xs: "auto", lg: 0 },
            bgcolor: "lightgray",
            borderRadius: 3,
            p: 3,
            border: 2,
            borderColor: "text.disabled",
          }}
        >
          <Typography mx="auto" sx={{ fontSize: "1.3rem", fontWeight: 500 }}>
            {product?.price} $
          </Typography>
          <Button
            color="primary"
            sx={{
              width: "50%",
              bgcolor: "error.main",
              ":hover": {
                bgcolor: "error.main",
              },
            }}
            variant="contained"
          >
            افزودن به سبد
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductDetailPage;
