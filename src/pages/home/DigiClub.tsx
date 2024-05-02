import { Box, Container, Icon, Stack, styled, Typography } from "@mui/material";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import digiclub from "../../images/digiclub.svg";

const GradientContainer = styled(Container)(() => ({
  background: "linear-gradient(to right, #2979ff, #007bb2)",
  marginTop: 30,
}));

const digiClubOptions = [
  {
    image: "../../public/digiclub-1.webp",
    title: "چرخ و بخت",
    icon: <DonutLargeOutlinedIcon />,
  },
  {
    image: "../../public/digiclub-2.webp",
    title: "ماموریت ها",
    icon: <CrisisAlertOutlinedIcon />,
  },
  {
    image: "../../public/digiclub-3.webp",
    title: "جایزه ها",
    icon: <EmojiEventsOutlinedIcon />,
  },
];

const DigiClub = () => {
  return (
    <GradientContainer sx={{ borderRadius: { lg: 5 }, py: { xs: 1, lg: 0 } }}>
      <Stack
        flexDirection={{ lg: "row-reverse" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-end", lg: "center" }}
      >
        <Box
          component="img"
          src={digiclub}
          sx={{
            width: "110px",
            height: "110px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        ></Box>
        <Stack
          flexDirection="row-reverse"
          justifyContent="center"
          gap={1}
          width={{ xs: "100%", lg: "auto" }}
        >
          {digiClubOptions.map((option, index) => (
            <Stack
              key={index}
              flexDirection={{ lg: "row-reverse" }}
              alignItems="center"
              width={{ xs: "100%", sm: "20%", lg: "230px" }}
              height={{ xs: "130px", lg: "60px" }}
              bgcolor="white"
              px={1}
              py={{ xs: 1, lg: 0 }}
              gap={{ xs: 0, lg: 1 }}
              borderRadius={
                index === 0
                  ? "0 10px 10px 0"
                  : index === 2
                  ? "10px 0 0 10px"
                  : 0
              }
              sx={{
                backgroundImage: `url(${option.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: { xs: "bottom", lg: "left" },
                cursor: "pointer",
              }}
            >
              <Icon color="primary">{option.icon}</Icon>
              <Typography variant="subtitle1">{option.title}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </GradientContainer>
  );
};

export default DigiClub;
