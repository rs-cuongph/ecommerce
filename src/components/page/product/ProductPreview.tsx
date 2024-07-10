/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import React from "react";

const ProductPreview = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={8} sm={12}>
        <img
          className="w-full max-w-[600px]"
          src="https://picsum.photos/3000/3000.jpg"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Box className="md:flex-col sm:flex-row xs:hidden sm:flex gap-[10px]">
          <img
            className="w-full max-w-[100px]"
            src="https://picsum.photos/3000/3000.jpg"
          />
          <img
            className="w-full max-w-[100px]"
            src="https://picsum.photos/3000/3000.jpg"
          />
          <img
            className="w-full max-w-[100px]"
            src="https://picsum.photos/3000/3000.jpg"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPreview;
