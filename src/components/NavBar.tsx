import { Box, IconButton, Stack, TextField } from "@mui/material";
import topImage from "../images/f90416804fecf5a5d408104ad8786ea41943877c_1714378302.gif";
import logo from "../images/logo.svg";
import LoginIcon from "@mui/icons-material/Login";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const NavBar = () => {
  return (
    <>
      <Stack>
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
            pr={3}
            width="50%"
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="16%" component="img" src={logo}></Box>
            <TextField
              placeholder="جستجو"
              id="filled-size-small"
              variant="filled"
              size="small"
              sx={{
                width: "80%",
                direction: "rtl",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            />
          </Stack>
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
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
