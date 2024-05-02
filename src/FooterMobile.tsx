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

const FooterMobile = () => {
  return (
    <>
      <Container sx={{ mb: 20, mt: 3 }}>
        <Stack>
          <BackToTopButton />
        </Stack>
        <Accordion
          sx={{
            direction: "rtl",
            borderBottom: "1px solid lightgray",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default FooterMobile;
