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
import ExpandableText from "./ExpandableText";

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
        <ExpandableText>
          فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین یک خرید
          اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت
          و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و
          ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی
          دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان
          ثابت خود را داشته باشد. یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا
          هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به
          دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
          کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد.
          هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که
          ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای
          آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی
          از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به
          دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر
          است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده،
          ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع
          سوپرمارکتی، ارسال با پست
        </ExpandableText>
      </Container>
    </>
  );
};

export default FooterMobile;
