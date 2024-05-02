import topImage from "../../images/f90416804fecf5a5d408104ad8786ea41943877c_1714378302.gif";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { isDesktop } from "react-device-detect";
import logo from "../../images/logo.svg";
import LoginIcon from "@mui/icons-material/Login";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const NavBar = () => {
  return (
    <>
      <Stack
        sx={{
          boxShadow: "0px 1px 0px 1px lightgray",
          pb: 3,
        }}
      >
        <Box
          component="img"
          src={topImage}
          sx={{
            width: { xs: "100vw", lg: "100vw" },
            height: { xs: "5vh", lg: "9vh" },
            objectFit: "cover",
            top: 0,
          }}
        ></Box>
        <Stack
          width="100%"
          flexDirection="row-reverse"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Stack
            pr={{ xs: 0, sm: 0, lg: 3 }}
            width={{ xs: "100%", sm: "100%", lg: "50%" }}
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            {isDesktop ? (
              <Box width="16%" component="img" src={logo}></Box>
            ) : (
              ""
            )}
            <TextField
              placeholder="جستجو"
              id="filled-size-small"
              variant="filled"
              size="small"
              sx={{
                width: { xs: "90%", sm: "90%", lg: "80%" },
                mx: { xs: "auto", sm: "auto", lg: "" },
                direction: "rtl",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            />
          </Stack>
          {isDesktop ? (
            <Stack
              pl={3}
              width="50%"
              flexDirection="row-reverse"
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  border: "1px solid lightgray",
                  borderRadius: 3,
                  px: 2,
                  py: 0,
                }}
              >
                <Box
                  component="p"
                  sx={{ color: "#444", fontSize: "1rem", fontWeight: "bold" }}
                >
                  ورود | ثبت نام
                </Box>
                <LoginIcon sx={{ color: "#444", ml: 0.5 }} />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  borderRadius: 0,
                  mr: 2,
                }}
              >
                <LocalGroceryStoreOutlinedIcon
                  sx={{
                    color: "#444",
                    fontSize: "1.7rem",
                  }}
                />
              </IconButton>
            </Stack>
          ) : (
            <Stack
              flexDirection="row-reverse"
              justifyContent="space-around"
              alignItems="center"
              width="100vw"
              sx={{
                bgcolor: "white",
                position: "fixed",
                bottom: 0,
                pt: 1,
                pb: 0.5,
                borderTop: "2px solid lightgray",
                zIndex: 1300,
              }}
            >
              <Stack alignItems="center">
                <HomeOutlinedIcon sx={{ fontSize: 30, color: "#999" }} />
                <Typography component="p" color="#999" fontSize={12}>
                  خانه
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <CategoryOutlinedIcon sx={{ fontSize: 30, color: "#999" }} />
                <Typography component="p" color="#999" fontSize={12}>
                  دسته بندی
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <LocalGroceryStoreOutlinedIcon
                  sx={{ fontSize: 30, color: "#999" }}
                />
                <Typography component="p" color="#999" fontSize={12}>
                  سبد خرید
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <PersonOutlinedIcon sx={{ fontSize: 30, color: "#999" }} />
                <Typography component="p" color="#999" fontSize={12}>
                  دیجی کالای من
                </Typography>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
