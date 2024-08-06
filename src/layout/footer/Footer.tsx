import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "#D4D3D3" }}
      className="absolute bottom-0 w-full text-center"
    >
      <Typography variant="body2" fontSize={10} color={"#ffff"}>
        All rights reserved © 2023 - 2024.
      </Typography>
    </Box>
  );
};

export default Footer;
