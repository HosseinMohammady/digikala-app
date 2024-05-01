import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Stack } from "@mui/material";
import article1 from "../images/read1.jpg";
import article2 from "../images/read2.jpg";
import article3 from "../images/read3.jpg";
import article4 from "../images/read4.jpg";

const articles = [
  {
    image: article1,
    title:
      "بررسی ادوپرفیوم زنانه نایس پاپت Baccarat Rouge پخش بوی مناسب و ماندگاری بالا",
  },
  {
    image: article2,
    title: "مهم‌ترین اصول انتخاب لباس سرهمی متناسب با شکل اندام چیست؟",
  },
  {
    image: article3,
    title:
      "بررسی کرم آبرسان برایت مکس مدل Rich جلوگیری از پیری زودرس و آبرسانی عمیق",
  },
  {
    image: article4,
    title: "راهنمای خرید بهترین گوشی هواوی؛ اقتصادی‌های پرکاربرد",
  },
];

const Articles = () => {
  return (
    <>
      <Container disableGutters sx={{ mt: 3, mb: { xs: 10, lg: 0 } }}>
        <Stack
          flexDirection={{ lg: "row-reverse" }}
          justifyContent={{ lg: "space-between" }}
          alignItems={{ xs: "center", lg: "normal" }}
          gap={{ xs: 2, lg: 0 }}
        >
          {articles.map((article, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "80%", lg: "24%" },
                direction: "rtl",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={article.image}
                  alt="article image"
                  sx={{
                    height: { xs: "180px", sm: "250px", lg: "180px" },
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.primary">
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Articles;
