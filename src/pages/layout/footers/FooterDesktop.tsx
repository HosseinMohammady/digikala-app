import {
  Box,
  Button,
  Container,
  Icon,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import BackToTopButton from "./BackToTopButton";
import digi from "../../../images/digii.svg";

const CustomStack = styled(Stack)(() => ({
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
}));

const ItemsStack = styled(Stack)(() => ({
  alignItems: "center",
}));

const footerItems = [
  { image: "../../../public/footerImage1.svg", title: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس" },
  { image: "../../../public/footerImage2.svg", title: "امکان پرداخت در محل" },
  { image: "../../../public/footerImage3.svg", title: "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ" },
  {
    image: "../../../public/footerImage4.svg",
    title: "هفت روز ضمانت بازگشت کالا",
  },
  { image: "../../../public/footerImage5.svg", title: "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ" },
];

const footerList1 = [
  "با دیجی‌کالا",
  "اتاق خبر دیجی‌کالا",
  "فروش در دیجی‌کالا",
  "فرصت‌های شغلی",
  "گزارش تخلف در دیجی‌کالا",
  "تماس با دیجی‌کالا",
  "درباره دیجی‌کالا",
];
const footerList2 = [
  "خدمات مشتریان",
  "پاسخ به پرسش‌های متداول",
  "رویه‌های بازگرداندن کالا",
  "شرایط استفاده",
  "حریم خصوصی",
  "گزارش باگ",
];
const footerList3 = [
  "راهنمای خرید از دیجی‌کالا",
  "نحوه ثبت سفارش",
  "رویه ارسال سفارش",
  "شیوه‌های پرداخت",
];

const FooterDesktop = () => {
  return (
    <>
      <Box
        mt={8}
        borderTop={1}
        pt={5}
        borderColor="lightgray"
        sx={{ direction: "rtl" }}
      >
        <CustomStack flexDirection="row" justifyContent="space-between">
          <Box component="img" src={digi}></Box>
          <BackToTopButton />
        </CustomStack>
        <CustomStack flexDirection="row" mt={2}>
          <Typography
            variant="subtitle2"
            pl={2}
            borderLeft={1}
            borderColor="#999"
          >
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
          </Typography>
          <Typography
            variant="subtitle2"
            px={2}
            borderLeft={1}
            borderColor="#999"
          >
            ۰۲۱-۹۱۰۰۰۱۰۰
          </Typography>
          <Typography variant="subtitle2" px={2}>
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </Typography>
        </CustomStack>
        <Container sx={{ mt: 7 }}>
          <Stack flexDirection="row" justifyContent="space-between">
            {footerItems.map((item, index) => (
              <ItemsStack key={index} sx={{ cursor: "pointer" }}>
                <Box component="img" src={item.image}></Box>
                <Typography variant="subtitle2">{item.title}</Typography>
              </ItemsStack>
            ))}
          </Stack>
        </Container>
        <CustomStack flexDirection="row" justifyContent="space-between" mt={4}>
          <List>
            {footerList1.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  sx={{
                    textAlign: "right",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      color: index === 0 ? "#222" : "#777",
                      fontSize: index === 0 ? 22 : 15,
                    }}
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            {footerList2.map((item, index) => (
              <ListItem key={index}>
                <ListItemText sx={{ textAlign: "right", cursor: "pointer" }}>
                  <Typography
                    sx={{
                      color: index === 0 ? "#222" : "#777",
                      fontSize: index === 0 ? 22 : 15,
                    }}
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            {footerList3.map((item, index) => (
              <ListItem key={index}>
                <ListItemText sx={{ textAlign: "right", cursor: "pointer" }}>
                  <Typography
                    sx={{
                      color: index === 0 ? "#222" : "#777",
                      fontSize: index === 0 ? 22 : 15,
                    }}
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: 22,
                  }}
                >
                  همراه ما باشید!
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <Stack
                width="80%"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Icon
                  fontSize="large"
                  sx={{ color: "#999", cursor: "pointer" }}
                >
                  <InstagramIcon />
                </Icon>
                <Icon
                  fontSize="large"
                  sx={{ color: "#999", cursor: "pointer" }}
                >
                  <TwitterIcon />
                </Icon>
                <Icon
                  fontSize="large"
                  sx={{ color: "#999", cursor: "pointer" }}
                >
                  <LinkedInIcon />
                </Icon>
                <Icon
                  fontSize="large"
                  sx={{ color: "#999", cursor: "pointer" }}
                >
                  <FacebookIcon />
                </Icon>
              </Stack>
            </ListItem>
            <ListItem>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: 22,
                  }}
                >
                  با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <Stack
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
              >
                <TextField
                  placeholder="ایمیل شما"
                  id="filled-size-large"
                  variant="filled"
                  size="small"
                  sx={{
                    width: "75%",
                    direction: "rtl",
                    borderRadius: "7px",
                    overflow: "hidden",
                  }}
                />
                <Button
                  variant="text"
                  sx={{
                    width: "15%",
                    borderRadius: "7px",
                    bgcolor: "lightgray",
                    color: "white",
                    fontSize: 18,
                    ":hover": { bgcolor: "#999" },
                  }}
                >
                  ثبت
                </Button>
              </Stack>
            </ListItem>
          </List>
        </CustomStack>
      </Box>
    </>
  );
};

export default FooterDesktop;
