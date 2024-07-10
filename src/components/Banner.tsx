/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <img
        src="https://picsum.photos/3000/1000.jpg"
        alt="banner"
        width={"100%"}
        height={"100%"}
        className="max-h-[300px]"
      />
    </Box>
  );
};

export default Banner;
