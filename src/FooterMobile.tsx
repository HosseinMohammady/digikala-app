import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackToTopButton from "./BackToTopButton";

const CustomAccordion = styled(Accordion)(() => ({
  direction: "rtl",
  borderBottom: "1px solid lightgray",
  boxShadow: "none",
}));

const footerList1 = [
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

const FooterMobile = () => {
  return (
    <>
      <Container sx={{ mb: 12, mt: 3 }}>
        <Stack>
          <BackToTopButton />
        </Stack>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: "bold" }}
          >
            با دیجی‌کالا
          </AccordionSummary>
          {footerList1.map((item) => (
            <AccordionDetails>{item}</AccordionDetails>
          ))}
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: "bold" }}
          >
            خدمات مشتریان
          </AccordionSummary>
          {footerList2.map((item) => (
            <AccordionDetails>{item}</AccordionDetails>
          ))}
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: "bold" }}
          >
            راهنمای خرید از دیجی‌کالا
          </AccordionSummary>
          {footerList3.map((item) => (
            <AccordionDetails>{item}</AccordionDetails>
          ))}
        </CustomAccordion>
      </Container>
    </>
  );
};

export default FooterMobile;
