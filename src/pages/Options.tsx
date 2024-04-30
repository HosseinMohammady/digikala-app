import { Box, Container, Stack } from "@mui/material";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";
import option4 from "../images/option4.png";
import option5 from "../images/option5.png";
import option6 from "../images/option6.png";
import option7 from "../images/option7.png";
import option8 from "../images/option8.png";

const optionsPart1 = [
  {
    image: option1,
    title: " دیجی‌کالا جت",
  },
  {
    image: option2,
    title: "دیجی‌پی",
  },
  {
    image: option3,
    title: "حراج دیجی استایل",
  },
  {
    image: option4,
    title: "خرید سوپرمارکتی",
  },
];
const optionsPart2 = [
  {
    image: option5,
    title: "حراج سر ماه",
  },
  {
    image: option6,
    title: "تبلیغات فروشندگان",
  },
  {
    image: option7,
    title: "روز لپ‌تاپ",
  },
  {
    image: option8,
    title: "بیشتر",
  },
];

const Options = () => {
  return (
    <Container disableGutters sx={{ mt: 2 }}>
      <Stack
        gap={{ xs: 3, lg: 0 }}
        flexDirection={{ lg: "row-reverse", xs: "column" }}
      >
        <Stack
          width={{ lg: "50%", xs: "100%" }}
          flexDirection="row-reverse"
          justifyContent="space-around"
        >
          {optionsPart1.map((option, index) => (
            <Stack
              key={index}
              sx={{ width: { xs: 55, sm: 57, lg: 60 }, cursor: "pointer" }}
            >
              <Box component="img" src={option.image}></Box>
              <Box
                sx={{
                  fontSize: { xs: 10, sm: 11, lg: 12.5 },
                  textWrap: "nowrap",
                  mx: "auto",
                  fontWeight: "bold",
                }}
                mt={1}
                component="span"
              >
                {option.title}
              </Box>
            </Stack>
          ))}
        </Stack>

        <Stack
          width={{ lg: "50%", xs: "100%" }}
          flexDirection="row-reverse"
          justifyContent="space-around"
        >
          {optionsPart2.map((option, index) => (
            <Stack
              key={index}
              sx={{ width: { xs: 55, sm: 57, lg: 60 }, cursor: "pointer" }}
            >
              <Box component="img" src={option.image}></Box>
              <Box
                sx={{
                  fontSize: { xs: 10, sm: 11, lg: 12.5 },
                  textWrap: "nowrap",
                  mx: "auto",
                  fontWeight: "bold",
                }}
                mt={1}
                component="span"
              >
                {option.title}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Options;
