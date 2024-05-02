import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const backToTopButton = () => {
  const [_backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outlined"
      sx={{
        color: { xs: "blue", lg: "#999" },
        border: { xs: "none", lg: "1px solid #999" },
        ":hover": { borderColor: { xs: "", lg: "#777" } },
      }}
      onClick={scrollUp}
    >
      بازگشت به بالا ^
    </Button>
  );
};

export default backToTopButton;
