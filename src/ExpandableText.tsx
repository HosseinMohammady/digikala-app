import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars)
    return <Typography variant="subtitle2">{children}</Typography>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <Container sx={{ direction: "rtl", mt: 1 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
        {text}...
        <Button variant="text" onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "بستن" : "مشاهده بیشتر"}
        </Button>
      </Typography>
    </Container>
  );
};

export default ExpandableText;
