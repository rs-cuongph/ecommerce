import ProductInfoCard from "@/components/page/product/ProductInfoCard";
import ProductPreview from "@/components/page/product/ProductPreview";
import ProductServiceCard from "@/components/page/product/ProductServiceCard";
import { Box, Grid } from "@mui/material";
import React from "react";

const ProductDetail = () => {
  return (
    <Box className="md:container mx-auto p-4">
      <Grid container className="bg-white p-4" spacing={1}>
        <Grid item md={4} sm={12}>
          <ProductPreview />
        </Grid>
        <Grid item md={5} sm={12}>
          <ProductInfoCard />
        </Grid>
        <Grid item md={3} sm={12}>
          <ProductServiceCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
