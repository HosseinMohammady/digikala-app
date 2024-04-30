import { Box, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={4}>
        <Typography fontSize={30}>Ooops!</Typography>
        <Typography fontSize={20}>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Something Went wrong."}
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
